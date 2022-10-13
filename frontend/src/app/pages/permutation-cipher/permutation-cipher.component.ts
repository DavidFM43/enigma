import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { textDecyptersReponse, textEncyptersReponse } from "../Interfaces";
import { ConnectionService } from "../services/connection.service";
import { NormalizerService } from "../services/normalizer.service";
import { correctKey, isPermutationNum } from "../shared/correct-key.directive";

@Component({
  selector: "app-permutation-cipher",
  templateUrl: "./permutation-cipher.component.html",
  styleUrls: ["./permutation-cipher.component.scss"],
})
export class PermutationCipherComponent implements OnInit {
  public arguments: FormGroup;
  public cipherText: string;
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
    });
    this.cipherText = "";
    this.submitted = false;
    this.resposeDymcMess = "";
  }

  ngOnInit(): void {}

  random(): void {
    let ranLen: number = Math.floor(Math.random() * 20 + 6);
    let arrBase = Array.from({ length: ranLen }, (_, i) => i + 1);
    let inx, aux;
    for (let i = 0; i < ranLen; i++) {
      inx = Math.floor(Math.random() * ranLen);
      aux = arrBase[inx];
      arrBase[inx] = arrBase[i];
      arrBase[i] = aux;
    }
    this.arguments.patchValue({
      key: arrBase.toString(),
    });
  }

  encrypt(): void {
    let normalizedText: string = this.normalizer.setplainText(
      this.arguments.get("plainText").value
    );
    let arrkeys: number[] = this.arguments
      .get("key")
      .value.split(",")
      .map((i) => Number(i));
    this.connection
      .permutationEncrypt(arrkeys, normalizedText)
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
    let arrkeys: number[] = this.arguments
      .get("key")
      .value.split(",")
      .map((i) => Number(i));
    this.connection
      .permutationDecrypt(arrkeys, normalizedText)
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
  forceUpperCase() {
    this.arguments.patchValue({
      key: this.arguments.get("key").value.toUpperCase(),
    });
  }
}
