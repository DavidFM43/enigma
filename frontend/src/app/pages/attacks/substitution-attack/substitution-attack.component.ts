import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { shiftAttackerResponse } from '../../Interfaces';
import { ConnectionService } from '../../services/connection.service';
import { NormalizerService } from '../../services/normalizer.service';

@Component({
  selector: 'app-substitution-attack',
  templateUrl: './substitution-attack.component.html',
  styleUrls: ['./substitution-attack.component.scss']
})
export class SubstitutionAttackComponent implements OnInit {

  public arguments: FormGroup;
  public submitted: boolean;

  constructor(private connection: ConnectionService, private normalizer: NormalizerService) {
    this.arguments = new FormGroup(
      {
        plainText: new FormControl('', [Validators.required,
          Validators.pattern('^[a-zA-Z ]+[ ]*[a-zA-Z ]*$')])
      }
    )
    this.submitted = false;
   }

  ngOnInit(): void {
  }

  random(): void{
    this.arguments.patchValue(
      {
        key: Math.floor(Math.random() * (25)).toString()
      }
    );
  }

  attack():void{
    let normalizedText: string =  this.normalizer
    .setplainText(this.arguments.get('plainText').value);
    this.connection.substitutionAttack(normalizedText).subscribe((ans:shiftAttackerResponse) => {
      if (!ans.error) {
       //this.options = ans.options;
      }
      this.submitted = true;
  });
  }

  get plainText(): AbstractControl{
    return this.arguments.get('plainText');
  }

}
