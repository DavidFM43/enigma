import { Component, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { ConnectionService } from "../services/connection.service";
import { textDecyptersReponse, textEncyptersReponse } from "../Interfaces";

@Component({
  selector: "app-simplified-des-cipher",
  templateUrl: "./simplified-des-cipher.component.html",
  styleUrls: ["./simplified-des-cipher.component.scss"],
})
export class SimplifiedDesCipherComponent implements OnInit {
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
      key: new UntypedFormControl("0110010110", [
        Validators.required,
        Validators.pattern("(0|1){10}"),
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

  get plainText() {
    return this.cipherParams.get("plainText")!;
  }

  random() {
    let result = [];
    for (let n = 0; n < 10; n++) {
      result.push(Math.floor(Math.random() * 2));
    }

    this.key.setValue(result.join(""));
  }

  encrypt(): void {
    this.connection
      .simplifiedDesEncrypt(
        this.key.value,
        this.plainText.value.replace(/ /g, "")
      )
      .subscribe((ans: textEncyptersReponse) => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.responseDymcMess = "Cipher";
        }
        this.submitted = true;
      });
  }

  decrypt(): void {
    this.connection
      .simplifiedDesDecrypt(this.key.value, this.plainText.value)
      .subscribe((ans: textDecyptersReponse) => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.responseDymcMess = "Decipher";
        }
        this.submitted = true;
      });
  }
}
