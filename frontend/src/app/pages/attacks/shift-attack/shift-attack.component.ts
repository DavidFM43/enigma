import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { shiftAttackerResponse } from "../../Interfaces";
import { ConnectionService } from "../../services/connection.service";
import { NormalizerService } from "../../services/normalizer.service";
@Component({
  selector: "app-shift-attack",
  templateUrl: "./shift-attack.component.html",
  styleUrls: ["./shift-attack.component.scss"],
})
export class ShiftAttackComponent implements OnInit {
  public arguments: UntypedFormGroup;
  public options: string[];
  public submitted: boolean;

  constructor(
    private connection: ConnectionService,
    private normalizer: NormalizerService
  ) {
    this.arguments = new UntypedFormGroup({
      plainText: new UntypedFormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$"),
      ]),
    });
    this.options = [];
    this.submitted = false;
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
    this.connection
      .shiftAttack(normalizedText)
      .subscribe((ans: shiftAttackerResponse) => {
        if (!ans.error) {
          this.options = ans.options;
        }
        this.submitted = true;
      });
  }

  get plainText(): AbstractControl {
    return this.arguments.get("plainText");
  }
}
