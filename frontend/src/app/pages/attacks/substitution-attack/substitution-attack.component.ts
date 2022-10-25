import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import {
  shiftAttackerResponse,
  substitutionAttackerResponse,
} from "../../Interfaces";
import { ConnectionService } from "../../services/connection.service";
import { NormalizerService } from "../../services/normalizer.service";

@Component({
  selector: "app-substitution-attack",
  templateUrl: "./substitution-attack.component.html",
  styleUrls: ["./substitution-attack.component.scss"],
})
export class SubstitutionAttackComponent implements OnInit {
  public arguments: UntypedFormGroup;
  public submitted: boolean;
  public resp: substitutionAttackerResponse;

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
    this.submitted = false;
    this.resp = null;
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
      .substitutionAttack(normalizedText)
      .subscribe((ans: substitutionAttackerResponse) => {
        if (!ans.error) {
          this.resp = ans;
        }
        this.submitted = true;
      });
  }

  get plainText(): AbstractControl {
    return this.arguments.get("plainText");
  }

  get limitMntsBi(): number {
    return Math.ceil(this.resp.analysis.bigrams.length / 3);
  }

  getShiftBi(i): number {
    return i * 3 + 3 <= this.resp.analysis.bigrams.length
      ? 3
      : this.resp.analysis.bigrams.length - i * 3;
  }
  get limitMntsLet(): number {
    return Math.ceil(this.resp.analysis.letters.length / 3);
  }

  getShiftLet(i): number {
    return i * 3 + 3 <= this.resp.analysis.letters.length
      ? 3
      : this.resp.analysis.letters.length - i * 3;
  }

  get limitMntsTri(): number {
    return Math.ceil(this.resp.analysis.trigrams.length / 3);
  }

  getShiftTri(i): number {
    return i * 3 + 3 <= this.resp.analysis.trigrams.length
      ? 3
      : this.resp.analysis.trigrams.length - i * 3;
  }
}
