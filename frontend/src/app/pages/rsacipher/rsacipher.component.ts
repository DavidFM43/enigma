import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { RSAKeys, RSAND, RSAPrivateKey, RSAPublicKey, textDecyptersReponse, textEncyptersReponse } from '../Interfaces';
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

  constructor(
    private connection: ConnectionService,
    private normalizer: NormalizerService
  ) {
    this.arguments = new UntypedFormGroup({
      P: new UntypedFormControl("", [isPrimeVal()]),
      Q: new UntypedFormControl("", [isPrimeVal()]),
      E: new UntypedFormControl("", [Validators.required]),
      D: new UntypedFormControl("", [Validators.required]),
      N: new UntypedFormControl("", [Validators.required]),
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
    this.connection
      .RSAGetKeys().subscribe((ansKeys: RSAKeys) => {
        console.log(ansKeys)
        this.arguments.patchValue({
          P: ansKeys.privateKey.P,
          Q: ansKeys.privateKey.Q,
          E: ansKeys.privateKey.E,
          D: ansKeys.privateKey.D,
          N: ansKeys.privateKey.N
        });
        this.isRandomKey = true;
      });
  }

  calculeND() {
    if(!this.P.invalid && !this.Q.invalid  && !this.E.invalid) {
      this.connection
      .RSAGetND(this.P.value, this.Q.value, this.E.value).subscribe((ans: RSAND) => {
        this.arguments.patchValue({
          D: ans.D,
          N: ans.N
        });
      });
    }

  }
  encrypt(): void {
    let publicKey: RSAPublicKey = {
      N: this.N.value,
      E: this.E.value
    }
    this.connection
      .RSAEncrypt(publicKey, this.arguments.get("plainText").value)
      .subscribe((ans: textEncyptersReponse) => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.resposeDymcMess = "Cipher";
        }
        this.submitted = true;
      });
  }

  decrypt(): void {
    let privateKey: RSAPrivateKey = {
      N: this.N.value,
      E: 1,
      D: this.D.value,
      P: 1,
      Q: 1
    }
    console.log(this.arguments.get("plainText").value);
    this.connection
      .RSADecrypt(privateKey, this.arguments.get("plainText").value)
      .subscribe((ans: textEncyptersReponse) => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
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
  get D(): AbstractControl {
    return this.arguments.get("D");
  }
  get N(): AbstractControl {
    return this.arguments.get("N");
  }
  get plainText(): AbstractControl {
    return this.arguments.get("plainText");
  }


}
