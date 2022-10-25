import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { gammaDecyptersReponse, gammaEncyptersReponse, textDecyptersReponse, textEncyptersReponse } from "../Interfaces";
import { ConnectionService } from "../services/connection.service";
import { NormalizerService } from "../services/normalizer.service";
import { correctKey, isPermutationNum } from "../shared/correct-key.directive";
import * as Plotly from 'src/assets/plotly-2.14.0.min.js';
import { round } from 'mathjs';
declare const Plotly
@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.scss']
})
export class GammaComponent implements OnInit {
  public arguments: UntypedFormGroup;
  public cipherText: string[];
  public decipherText;
  public percentage: number;
  public graph: {
    data: any,
    layout: any
  };
  public submitted: boolean;
  public resposeDymcMess: string;

  constructor(
    private connection: ConnectionService,
    private normalizer: NormalizerService
  ) {
    this.arguments = new UntypedFormGroup({
      key: new UntypedFormControl("", [
        Validators.required,
        correctKey(
          Array.from({ length: 26 }, (_, i) => i + 1),
          0,
          25
        ),
        isPermutationNum(),
      ]),
      plainText: new UntypedFormControl("", [
        Validators.required,
        //Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$"),
      ]),
      x: new UntypedFormControl("", [Validators.required, Validators.pattern("^-?[0-9]+$")]),
      y: new UntypedFormControl("", [Validators.required, Validators.pattern("^-?[0-9]+$")])
    });
    this.cipherText = [];
    this.decipherText = "";
    this.percentage = null;
    this.submitted = false;
    this.resposeDymcMess = "";
  }

  ngOnInit(): void {}

  random(): void {
    let ranLen: number = Math.floor(Math.random() * 20 + 6);
    let arrBase = Array.from({ length: ranLen }, (_, i) => i);
    let inx, aux;
    for (let i = 0; i < ranLen; i++) {
      inx = Math.floor(Math.random() * ranLen);
      aux = arrBase[inx];
      arrBase[inx] = arrBase[i];
      arrBase[i] = aux;
    }
    this.arguments.patchValue({
      key: arrBase.toString(),
      x: Math.floor(Math.random() * 26),
      y: Math.floor(Math.random() * 26)
    });
  }

  encrypt(): void {
    let normalizedText: string = this.normalizer.setplainText(
      this.arguments.get("plainText").value
    );
    let keys: string = this.key.value.replaceAll(",","")
    let  x: number = this.x.value;
    let  y: number = this.y.value;
    this.connection
      .gammaEncrypt(keys, x, y, normalizedText)
      .subscribe((ans: gammaEncyptersReponse) => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.percentage = round(ans.percentage,3);
          this.graph = JSON.parse(ans.grapgJSON);
          Plotly.newPlot("plot", this.graph.data, this.graph.layout);
 
          console.log(JSON.parse(ans.grapgJSON));
          this.resposeDymcMess = "Cipher";
        }
        this.submitted = true;
      });
  }

  decrypt(): void {
    Plotly.purge("plot");
    let normalizedText: string = this.normalizer.setplainText(
      this.arguments.get("plainText").value
    );
    let keys: string = this.key.value.replaceAll(",","")
    let  x: number = this.x.value;
    let  y: number = this.y.value;
    normalizedText = normalizedText.slice(1)
    normalizedText = normalizedText.slice(0, normalizedText.length - 1)
    let arr1: string[] = normalizedText.split("],[")
    let arr: number[][] = []
    for (let i = 0; i < arr1.length; i++) {
      arr.push(arr1[i].split(",").map(Number))
    }
    this.connection
      .gammaDecrypt(keys, x, y, arr)
      .subscribe((ans: gammaDecyptersReponse) => {
        if (!ans.error) {
          this.resposeDymcMess = "Decipher";
          this.decipherText = ans.decipherText;
        }
        this.submitted = true;
      });
  }

  get key(): AbstractControl {
    return this.arguments.get("key");
  }
  get plainText(): AbstractControl {
    return this.arguments.get("plainText");
  }
  get x(): AbstractControl {
    return this.arguments.get("x");
  }
  get y(): AbstractControl {
    return this.arguments.get("y");
  }
  forceUpperCase() {
    this.arguments.patchValue({
      key: this.arguments.get("key").value.toUpperCase(),
    });
  }

}
