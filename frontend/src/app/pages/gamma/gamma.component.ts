import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { gammaEncyptersReponse, textDecyptersReponse, textEncyptersReponse } from "../Interfaces";
import { ConnectionService } from "../services/connection.service";
import { NormalizerService } from "../services/normalizer.service";
import { correctKey, isPermutationNum } from "../shared/correct-key.directive";

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.scss']
})
export class GammaComponent implements OnInit {
  public arguments: FormGroup;
  public cipherText: string[];
  public percentage: number;
  public graph;
  public submitted: boolean;
  public resposeDymcMess: string;

  constructor(
    private connection: ConnectionService,
    private normalizer: NormalizerService
  ) {
    this.arguments = new FormGroup({
      key: new FormControl("", [
        Validators.required,
        correctKey(
          Array.from({ length: 26 }, (_, i) => i + 1),
          0,
          25
        ),
        isPermutationNum(),
      ]),
      plainText: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$"),
      ]),
      x: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      y: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")])
    });
    this.cipherText = [];
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
          this.percentage = ans.percentage;
          this.graph = JSON.parse(ans.grapgJSON); 
          console.log(JSON.parse(ans.grapgJSON));
          this.resposeDymcMess = "Cipher";
        }
        this.submitted = true;
      });
  }

  decrypt(): void {
    let normalizedText: string = this.normalizer.setplainText(
      this.arguments.get("plainText").value
    );
    let arrkeys: number[] = this.arguments
      .get("key")
      .value.split(",")
      .map((i) => Number(i));
    this.connection
      .permutationDecrypt(arrkeys, normalizedText)
      .subscribe((ans: textDecyptersReponse) => {
        if (!ans.error) {
          //this.cipherText = ans.decipherText;
          this.resposeDymcMess = "Decipher";
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
