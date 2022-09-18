import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { affineAttackerResponse } from '../../Interfaces';
import { ConnectionService } from '../../services/connection.service';
import { NormalizerService } from '../../services/normalizer.service';

@Component({
  selector: 'app-affine-attack',
  templateUrl: './affine-attack.component.html',
  styleUrls: ['./affine-attack.component.scss']
})
export class AffineAttackComponent implements OnInit {

  public arguments: FormGroup;
  public options:[string, number[]];
  public submitted: boolean;

  constructor(private connection: ConnectionService, private normalizer: NormalizerService) {
    this.arguments = new FormGroup(
      {
        plainText: new FormControl('', [Validators.required,
          Validators.pattern('^[a-zA-Z ]+[ ]*[a-zA-Z ]*$')])
      }
    )
    this.options = null;
    this.submitted = false;
   }

  ngOnInit(): void {
  }



  attack():void{
    let normalizedText: string =  this.normalizer
    .setplainText(this.arguments.get('plainText').value);
    this.connection.affineAttack(normalizedText).subscribe((ans:affineAttackerResponse) => {
      if (!ans.error) {
       this.options = ans.options;
      }
      this.submitted = true;
      console.log(this.options);
  });
  }

  get plainText(): AbstractControl{
    return this.arguments.get('plainText');
  }
}
