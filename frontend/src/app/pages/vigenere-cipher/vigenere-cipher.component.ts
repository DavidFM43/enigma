import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { textDecyptersReponse, textEncyptersReponse } from "../Interfaces";
import { ConnectionService } from "../services/connection.service";
import { NormalizerService } from "../services/normalizer.service";

@Component({
  selector: "app-vigenere-cipher",
  templateUrl: "./vigenere-cipher.component.html",
  styleUrls: ["./vigenere-cipher.component.scss"],
})
export class VigenereCipherComponent implements OnInit {
  public arguments: FormGroup;
  public cipherText: string;
  public submitted: boolean;
  public resposeDymcMess: string;
  private load: boolean;

  constructor(
    private connection: ConnectionService,
    private normalizer: NormalizerService
  ) {
    this.arguments = new FormGroup({
      plainText: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$"),
      ]),
      key: new FormControl("", [
        Validators.required,
        Validators.pattern("^[A-Z]*$"),
        this.maxLength(),
      ]),
    });
    this.cipherText = "";
    this.submitted = false;
    this.resposeDymcMess = "";
    this.load = false;
  }
  ngOnInit(): void {
    this.load = true;
  }

  random(): void {
    let ranLength: number = Math.floor(Math.random() * 5 + 2);
    let arrBase: string[] = Array.from({ length: ranLength }, () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 25))
    );

    this.arguments.patchValue({
      key: arrBase.join(""),
    });
  }

  encrypt(): void {
    let normalizedText: string = this.normalizer.setplainText(
      this.arguments.get("plainText").value
    );
    this.connection
      .vigenereEncrypt(this.arguments.get("key").value, normalizedText)
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
      .vigenereDecrypt(this.arguments.get("key").value, normalizedText)
      .subscribe((ans: textDecyptersReponse) => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
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
  maxLength(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return !this.load
        ? null
        : control.value.length > this.plainText.value.length
        ? { incorrectKey: { value: control.value } }
        : null;
    };
  }
  forceUpperCase(): void {
    this.arguments.patchValue({
      key: this.arguments.get("key").value.toUpperCase(),
    });
  }
  updateValidators(): void {
    this.key.updateValueAndValidity();
  }
}
