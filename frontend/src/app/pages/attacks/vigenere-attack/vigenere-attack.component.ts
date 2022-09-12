import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { shiftAttackerResponse, vigeneretAttackerResponse } from '../../Interfaces';
import { ConnectionService } from '../../services/connection.service';
import { NormalizerService } from '../../services/normalizer.service';

@Component({
  selector: 'app-vigenere-attack',
  templateUrl: './vigenere-attack.component.html',
  styleUrls: ['./vigenere-attack.component.scss']
})
export class VigenereAttackComponent implements OnInit {

  public arguments: FormGroup;
  public submitted: boolean;

  constructor(private connection: ConnectionService, private normalizer: NormalizerService) {
    this.arguments = new FormGroup(
      {
        keySize: new FormControl('', [Validators.required, Validators.pattern('^[1-9]*$'), 
                                 Validators.min(1), Validators.max(7)]),
        plainText: new FormControl('', [Validators.required,
          Validators.pattern('^[a-zA-Z ]+[ ]*[a-zA-Z ]*$')])
      }
    )
    this.submitted = false;
   }

  ngOnInit(): void {
  }

  noKeyAttack():void{
    let normalizedText: string =  this.normalizer
    .setplainText(this.arguments.get('plainText').value);
    this.connection.vigenereNoKeyAttack(normalizedText).subscribe((ans:shiftAttackerResponse) => {
      if (!ans.error) {
       //this.options = ans.options;
      }
      this.submitted = true;
  });
  }
  keyAttack():void{
    let normalizedText: string =  this.normalizer
    .setplainText(this.arguments.get('plainText').value);
    this.connection.vigenereKeyAttack( parseInt(this.keySize.value)
    ,normalizedText).subscribe((ans:vigeneretAttackerResponse) => {
      if (!ans.error) {
       //this.options = ans.options;
      }
      this.submitted = true;
  });
  }

  get keySize(): AbstractControl{
    return this.arguments.get('keySize');
  }

  get plainText(): AbstractControl{
    return this.arguments.get('plainText');
  }


}
