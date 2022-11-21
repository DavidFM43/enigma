import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { RSAKeys, textDecyptersReponse, textEncyptersReponse } from '../Interfaces';
import { ConnectionService } from '../services/connection.service';
import { NormalizerService } from '../services/normalizer.service';
import {
  isPrimeVal
} from "../shared/correct-key.directive";
import * as math from "mathjs";
@Component({
  selector: 'app-rsacipher',
  templateUrl: './rsacipher.component.html',
  styleUrls: ['./rsacipher.component.scss']
})
export class RSACipherComponent implements OnInit {

  public arguments: UntypedFormGroup;
  public cipherText: string;
  public submitted: boolean;
  public resposeDymcMess: string;
  public isRandomKey: boolean;
  public N: BigInt;
  public D: BigInt;

  constructor(
    private connection: ConnectionService,
    private normalizer: NormalizerService
  ) {
    this.arguments = new UntypedFormGroup({
      P: new UntypedFormControl("", [Validators.required, isPrimeVal()]),
      Q: new UntypedFormControl("", [Validators.required]),
      E: new UntypedFormControl("", [Validators.required]),
      plainText: new UntypedFormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$"),
      ]),
    });
    this.cipherText = "";
    this.submitted = false;
    this.resposeDymcMess = "";
    this.isRandomKey = false;
    this.N = null;
    this.D = null;
  }

  ngOnInit(): void {}

  random(): void {
    this.connection
      .RSAGetKeys().subscribe((ansKeys: RSAKeys) => {
        console.log(ansKeys)
        this.arguments.patchValue({
          P: ansKeys.privateKey.P,
          Q: ansKeys.privateKey.Q,
          E: ansKeys.privateKey.E
        });
        this.isRandomKey = true;
        this.N = ansKeys.privateKey.N;
        this.D = ansKeys.privateKey.D;
      });
  }

  calculeND() {
    if(!this.P.invalid && !this.Q.invalid  && !this.E.invalid) {
      this.N = BigInt(this.P.value * this.Q.value);
      let ctf = math.lcm(this.P.value - 1, this.Q.value - 1);
      console.log(math.xgcd(this.E.value, ctf)["_data"][1], ctf);
      this.D = math.mod(math.xgcd(this.E.value, ctf)["_data"][1], ctf);
    }

  }


  encrypt(): void {
    let normalizedText: string = this.normalizer.setplainText(
      this.arguments.get("plainText").value
    );
    this.connection
      .shiftEncrypt(this.arguments.get("key").value, normalizedText)
      .subscribe((ans: textEncyptersReponse) => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.resposeDymcMess = "Cipher";
        }
        this.submitted = true;
      });
  }

  decrypt(): void {
    let normalizedText: string = this.normalizer.setplainText(
      this.arguments.get("plainText").value
    );
    this.connection
      .shiftDecrypt(this.arguments.get("key").value, normalizedText)
      .subscribe((ans: textDecyptersReponse) => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }
        this.submitted = true;
      });
  }

  get P(): AbstractControl {
    return this.arguments.get("P");
  }
  get Q(): AbstractControl {
    return this.arguments.get("Q");
  }
  get E(): AbstractControl {
    return this.arguments.get("E");
  }
  get plainText(): AbstractControl {
    return this.arguments.get("plainText");
  }


}
