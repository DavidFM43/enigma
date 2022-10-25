import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { affineAttackerResponse } from "../../Interfaces";
import { ConnectionService } from "../../services/connection.service";
import { NormalizerService } from "../../services/normalizer.service";

@Component({
  selector: "app-affine-attack",
  templateUrl: "./affine-attack.component.html",
  styleUrls: ["./affine-attack.component.scss"],
})
export class AffineAttackComponent implements OnInit {
  public arguments: UntypedFormGroup;
  public plainText: string;
  public key: number[];
  public submitted: boolean;

  constructor(
    private connection: ConnectionService,
    private normalizer: NormalizerService
  ) {
    this.arguments = new UntypedFormGroup({
      cipherText: new UntypedFormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z][a-zA-Z ]*$"),
      ]),
    });
    this.plainText = "";
    this.key = null;
    this.submitted = false;
  }

  ngOnInit(): void {}

  attack(): void {
    let normalizedText: string = this.normalizer.setcipherText(
      this.arguments.get("cipherText").value
    );
    this.connection
      .affineAttack(normalizedText)
      .subscribe((ans: affineAttackerResponse) => {
        if (!ans.error) {
          this.plainText = ans.plainText;
          this.key = ans.key;
        }
        this.submitted = true;
      });
  }

  get cipherText(): AbstractControl {
    return this.arguments.get("cipherText");
  }
}
