import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import {
  cipherTextElGamal,
  ElGamalElipKeys,
  ElGamalElipResponse,
  ElGamalKeys,
  RSAKeys,
  RSAND,
  RSAPrivateKey,
  RSAPublicKey,
  textDecyptersReponse,
  textEncyptersReponse,
} from "../Interfaces";
import { ConnectionService } from "../services/connection.service";
import { NormalizerService } from "../services/normalizer.service";
import { isPrimeVal } from "../shared/correct-key.directive";
@Component({
  selector: 'app-el-gamal-elip-cipher',
  templateUrl: './el-gamal-elip-cipher.component.html',
  styleUrls: ['./el-gamal-elip-cipher.component.scss']
})
export class ElGamalElipCipherComponent implements OnInit {
  public arguments: UntypedFormGroup;
  public argumentsDecrypt: UntypedFormGroup;
  public cipherText: string;
  public DecipherTextED: string;
  public submitted: boolean;
  public submittedDE: boolean;
  public resposeDymcMess: string;
  public isRandomKey: boolean;

  constructor(private connection: ConnectionService) {
    this.arguments = new UntypedFormGroup({
      X: new UntypedFormControl("", [
        Validators.pattern(/^[0-9]\d*$/),
        Validators.required,
      ]),
      Y: new UntypedFormControl("", [
        Validators.pattern(/^[0-9]\d*$/),
        Validators.required,
      ]),
      Pk: new UntypedFormControl("", [
        Validators.pattern(/^[0-9]\d*$/),
        Validators.required,
      ]),
      plainText: new UntypedFormControl("", [Validators.required]),
    });
    this.argumentsDecrypt = new UntypedFormGroup({
      cipherTextDE: new UntypedFormControl("", [Validators.required]),
      nonce: new UntypedFormControl("", [
        Validators.required,
      ]),
      authTag: new UntypedFormControl("", [
        Validators.required,
      ]),
      ciphertextPubKey_x: new UntypedFormControl("", [
        Validators.required,
      ]),
      ciphertextPubKey_y: new UntypedFormControl("", [
        Validators.required,
      ]),
    });
    this.cipherText = "";
    this.DecipherTextED = "";
    this.submitted = false;
    this.submittedDE = false;
    this.resposeDymcMess = "";
    this.isRandomKey = false;
  }

  ngOnInit(): void {}

  random(): void {
    this.isRandomKey = true;
    this.connection.ElGamalElipGetKeys().subscribe((ansKeys: ElGamalElipKeys) => {
      console.log(ansKeys);
      this.arguments.patchValue({
        X: ansKeys.X,
        Y: ansKeys.Y,
        Pk: ansKeys.Pk,
      });
      this.isRandomKey = false;
    });
  }

  encrypt(): void {
    let publicKey: ElGamalElipKeys = {
      X: this.X.value,
      Y: this.Y.value,
      Pk: this.Pk.value,
    };
    this.connection
      .ElGamalElipEncrypt(publicKey, this.arguments.get("plainText").value.replace(/ /g, ""))
      .subscribe((ans: ElGamalElipResponse) => {
        this.cipherText = ans.cipherText.ciphertext;
        if (!ans.error) {
          this.argumentsDecrypt.patchValue({
            cipherTextDE: ans.cipherText.ciphertext, 
            nonce: ans.cipherText.nonce,
            authTag: ans.cipherText.authTag,
            ciphertextPubKey_x: ans.cipherText.ciphertextPubKey_x,
            ciphertextPubKey_y: ans.cipherText.ciphertextPubKey_y
          });
          this.resposeDymcMess = "Cipher";
        }
        this.submitted = true;
      });
  }

  decrypt(): boolean {
    let privateKey: ElGamalElipKeys = {
      X: this.X.value,
      Y: this.Y.value,
      Pk: this.Pk.value,
    };
    let cipherTxt: cipherTextElGamal = {
      ciphertext: this.cipherTextDE.value,
      nonce: this.nonce.value,
      authTag: this.authTag.value,
      ciphertextPubKey_x: this.ciphertextPubKey_x.value,
      ciphertextPubKey_y: this.ciphertextPubKey_y.value
    }

    this.connection
      .ElGamalElipDecrypt(privateKey, cipherTxt)
      .subscribe((ans: textDecyptersReponse) => {
        if (!ans.error) {
          this.DecipherTextED = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }
        this.submittedDE = true;
      });
    return true;
  }

  get X(): AbstractControl {
    return this.arguments.get("X");
  }
  get Y(): AbstractControl {
    return this.arguments.get("Y");
  }
  get Pk(): AbstractControl {
    return this.arguments.get("Pk");
  }
  get plainText(): AbstractControl {
    return this.arguments.get("plainText");
  }

  get nonce(): AbstractControl {
    return this.argumentsDecrypt.get("nonce");
  }
  get authTag(): AbstractControl {
    return this.argumentsDecrypt.get("authTag");
  }
  get ciphertextPubKey_x(): AbstractControl {
    return this.argumentsDecrypt.get("ciphertextPubKey_x");
  }
  get ciphertextPubKey_y(): AbstractControl {
    return this.argumentsDecrypt.get("ciphertextPubKey_y");
  }
  get cipherTextDE(): AbstractControl {
    return this.argumentsDecrypt.get("cipherTextDE");
  }
}
