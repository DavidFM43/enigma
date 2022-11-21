import { Component, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { ConnectionService } from "../services/connection.service";
import { textDecyptersReponse, textEncyptersReponse } from "../Interfaces";

@Component({
  selector: 'app-rabin-cipher',
  templateUrl: './rabin-cipher.component.html',
  styleUrls: ['./rabin-cipher.component.scss']
})
export class RabinCipherComponent implements OnInit {
  cipherParams!: UntypedFormGroup;
  public submitted: boolean;
  public cipherText: string;
  public responseDymcMess: string;

  constructor(private connection: ConnectionService) {
    this.cipherText = "";
    this.submitted = false;
    this.responseDymcMess = "";
  }

  ngOnInit(): void {
    this.cipherParams = new UntypedFormGroup({
      key: new UntypedFormControl("522429", [
        Validators.required,
        Validators.pattern("[1-9][0-9]*"),
      ]),
      primeP: new UntypedFormControl("213415315", [
        Validators.required,
        Validators.pattern("(1-9)(0-9)*"),
      ]),
      primeQ: new UntypedFormControl("213415315", [
        Validators.required,
        Validators.pattern("(1-9)(0-9)*"),
      ]),
      plainText: new UntypedFormControl("attack at dawn", [
        Validators.required,
        Validators.pattern("[+/=0-9a-zA-Z][ +/=0-9a-zA-Z]*"),
      ]),
    });
  }

  get key() {
    return this.cipherParams.get("key")!;
  }

  get primeP() {
    return this.cipherParams.get("primeP")!;
  }

  get primeQ() {
    return this.cipherParams.get("primeQ")!;
  }

  get plainText() {
    return this.cipherParams.get("plainText")!;
  }

  // random() {
  //   let result = [];
  //   for (let n = 0; n < 10; n++) {
  //     result.push(Math.floor(Math.random() * 2));
  //   }

  //   this.key.setValue(result.join(""));
  // }

  // encrypt(): void {
  //   this.connection
  //     .simplifiedDesEncrypt(
  //       this.key.value,
  //       this.plainText.value.replace(/ /g, "")
  //     )
  //     .subscribe((ans: textEncyptersReponse) => {
  //       if (!ans.error) {
  //         this.cipherText = ans.cipherText;
  //         this.responseDymcMess = "Cipher";
  //       }
  //       this.submitted = true;
  //     });
  // }

  // decrypt(): void {
  //   this.connection
  //     .simplifiedDesDecrypt(this.key.value, this.plainText.value)
  //     .subscribe((ans: textDecyptersReponse) => {
  //       if (!ans.error) {
  //         this.cipherText = ans.decipherText;
  //         this.responseDymcMess = "Decipher";
  //       }
  //       this.submitted = true;
  //     });
  // }

}
