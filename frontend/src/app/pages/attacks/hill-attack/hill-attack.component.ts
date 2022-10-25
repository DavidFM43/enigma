import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { hillAttackerResponse, shiftAttackerResponse } from "../../Interfaces";
import { ConnectionService } from "../../services/connection.service";
import { NormalizerService } from "../../services/normalizer.service";

@Component({
  selector: "app-hill-attack",
  templateUrl: "./hill-attack.component.html",
  styleUrls: ["./hill-attack.component.scss"],
})
export class HillAttackComponent implements OnInit {
  public arguments: UntypedFormGroup;
  // public options: hillAttackerResponse;
  public options: [number[]];
  public submitted: boolean;
  public error: boolean;

  constructor(
    private connection: ConnectionService,
    private normalizer: NormalizerService
  ) {
    this.arguments = new UntypedFormGroup({
      plainText: new UntypedFormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$"),
      ]),
      cipherText: new UntypedFormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$"),
      ]),
      keySize: new UntypedFormControl("", [
        Validators.required,
        Validators.pattern("^[1-9]*$"),
        Validators.min(2),
        Validators.max(4),
      ]),
    });
    this.options = null;
    this.submitted = false;
    this.error = false;
  }

  ngOnInit(): void {}

  random(): void {
    this.arguments.patchValue({
      key: Math.floor(Math.random() * 25).toString(),
    });
  }

  attack(): void {
    let normalizedText: string = this.normalizer.setplainText(
      this.arguments.get("plainText").value
    );
    let normalizedTextCipher: string = this.normalizer.setplainText(
      this.arguments.get("cipherText").value
    );
    this.connection
      .hillAttack(
        normalizedTextCipher,
        normalizedText,
        parseInt(this.keySize.value)
      )
      .subscribe((ans: hillAttackerResponse) => {
        this.options = ans.possibleKeys;
        if (!ans.error) {
          this.error = false;
        } else {
          this.error = true;
        }
        this.submitted = true;
      });
  }

  get plainText(): AbstractControl {
    return this.arguments.get("plainText");
  }
  get keySize(): AbstractControl {
    return this.arguments.get("keySize");
  }
  get cipherText(): AbstractControl {
    return this.arguments.get("cipherText");
  }
}
