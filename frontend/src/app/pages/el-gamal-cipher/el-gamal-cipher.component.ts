import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ElGamalKeys, RSAKeys, RSAND, RSAPrivateKey, RSAPublicKey, textDecyptersReponse, textEncyptersReponse } from '../Interfaces';
import { ConnectionService } from '../services/connection.service';
import { NormalizerService } from '../services/normalizer.service';
import {
  isPrimeVal
} from "../shared/correct-key.directive";

@Component({
  selector: 'app-el-gamal-cipher',
  templateUrl: './el-gamal-cipher.component.html',
  styleUrls: ['./el-gamal-cipher.component.scss']
})
export class ElGamalCipherComponent implements OnInit {


  public arguments: UntypedFormGroup;
  public cipherText: string;
  public submitted: boolean;
  public resposeDymcMess: string;
  public isRandomKey: boolean;

  constructor(
    private connection: ConnectionService) {
    this.arguments = new UntypedFormGroup({
      P: new UntypedFormControl("", [Validators.pattern(/^[0-9]\d*$/), Validators.required]),
      G: new UntypedFormControl("", [Validators.pattern(/^[0-9]\d*$/), Validators.required]),
      H: new UntypedFormControl("", [Validators.pattern(/^[0-9]\d*$/), Validators.required]),
      X: new UntypedFormControl("", [Validators.pattern(/^[0-9]\d*$/), Validators.required]),
      plainText: new UntypedFormControl("", [
        Validators.required
      ]),
    });
    this.cipherText = "";
    this.submitted = false;
    this.resposeDymcMess = "";
    this.isRandomKey = false;
  }

  ngOnInit(): void {}

  random(): void {
    this.isRandomKey = true;
    this.connection
      .ElGamalGetKeys().subscribe((ansKeys: ElGamalKeys) => {
        console.log(ansKeys)
        this.arguments.patchValue({
          P: ansKeys.P,
          G: ansKeys.G,
          H: ansKeys.H,
          X: ansKeys.X
        });
        this.isRandomKey = false;
      });
  }

  encrypt(): void {
    let publicKey: ElGamalKeys = {
      P: this.P.value,
      G: this.G.value,
      H: this.H.value
    }
    this.connection
      .ElGamalEncrypt(publicKey, this.arguments.get("plainText").value)
      .subscribe((ans: textEncyptersReponse) => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.resposeDymcMess = "Cipher";
        }
        this.submitted = true;
      });
  }

  decrypt(): boolean {
    console.log(1)
    let privateKey: ElGamalKeys = {
      P: this.P.value,
      G: this.G.value,
      X: this.X.value
    }
    let arrNums: string[] = this.arguments.get("plainText").value.split(",");
    console.log(arrNums);
    let regexp: RegExp = new RegExp(/^[0-9]\d*$/);
    for(let i = 0; i < arrNums.length; i += 2){
      if (!regexp.test(arrNums[i])){
        this.cipherText = "Cannot decrypt text";
        return false;
      }
    }
    let arrCop: number[][] = []
    for(let i = 0; i < arrNums.length/2; i+=2){
      arrCop.push([parseInt(arrNums[i]), parseInt(arrNums[i+1])]);
    }
    console.log(arrCop);
    this.connection
      .ElGamalDecrypt(privateKey, arrCop)
      .subscribe((ans: textDecyptersReponse) => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }
        this.submitted = true;
      });
      return true;
  }

  get P(): AbstractControl {
    return this.arguments.get("P");
  }
  get G(): AbstractControl {
    return this.arguments.get("G");
  }
  get X(): AbstractControl {
    return this.arguments.get("X");
  }
  get H(): AbstractControl {
    return this.arguments.get("H");
  }
  get plainText(): AbstractControl {
    return this.arguments.get("plainText");
  }


}
