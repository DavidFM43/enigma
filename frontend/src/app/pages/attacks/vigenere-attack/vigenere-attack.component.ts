import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import {
  shiftAttackerResponse,
  vigenereKeyAttackResponse,
  vigenereNoKeyAttackResponse,
} from "../../Interfaces";
import { ConnectionService } from "../../services/connection.service";
import { NormalizerService } from "../../services/normalizer.service";

@Component({
  selector: "app-vigenere-attack",
  templateUrl: "./vigenere-attack.component.html",
  styleUrls: ["./vigenere-attack.component.scss"],
})
export class VigenereAttackComponent implements OnInit {
  public arguments: UntypedFormGroup;
  public submitted: boolean;
  public respNoKey: vigenereNoKeyAttackResponse;
  public respKey: vigenereKeyAttackResponse;

  constructor(
    private connection: ConnectionService,
    private normalizer: NormalizerService
  ) {
    this.arguments = new UntypedFormGroup({
      keySize: new UntypedFormControl("", [
        Validators.required,
        Validators.pattern("^[1-9]*$"),
        Validators.min(1),
        Validators.max(7),
      ]),
      plainText: new UntypedFormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$"),
      ]),
    });
    this.submitted = false;
    this.respKey = null;
    this.respNoKey = null;
  }

  ngOnInit(): void {}

  noKeyAttack(): void {
    let normalizedText: string = this.normalizer.setplainText(
      this.arguments.get("plainText").value
    );
    this.connection
      .vigenereNoKeyAttack(normalizedText)
      .subscribe((ans: vigenereNoKeyAttackResponse) => {
        if (!ans.error) {
          this.respNoKey = ans;
          for (let i = 0; i < this.respNoKey.ioc.mean_iocs.length; i++) {
            this.respNoKey.ioc.mean_iocs[i] = parseFloat(
              this.respNoKey.ioc.mean_iocs[i].toFixed(3)
            );
          }
        }
        this.submitted = true;
        this.respKey = null;
      });
  }
  keyAttack(): void {
    let normalizedText: string = this.normalizer.setplainText(
      this.arguments.get("plainText").value
    );
    this.connection
      .vigenereKeyAttack(parseInt(this.keySize.value), normalizedText)
      .subscribe((ans: vigenereKeyAttackResponse) => {
        if (!ans.error) {
          this.respKey = ans;
        }
        this.submitted = true;
        this.respNoKey = null;
      });
  }

  get keySize(): AbstractControl {
    return this.arguments.get("keySize");
  }

  get plainText(): AbstractControl {
    return this.arguments.get("plainText");
  }

  get limitMnts(): number {
    return Math.ceil(this.respNoKey.ioc.mean_iocs.length / 3);
  }

  getShift(i): number {
    return i * 3 + 3 <= this.respNoKey.ioc.mean_iocs.length
      ? 3
      : this.respNoKey.ioc.mean_iocs.length - i * 3;
  }
}
