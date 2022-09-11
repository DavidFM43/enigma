import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { textDecyptersReponse, textEncyptersReponse } from '../Interfaces';
import { ConnectionService } from '../services/connection.service';
import { NormalizerService } from '../services/normalizer.service';
import { correctKey } from '../shared/correct-key.directive';

@Component({
  selector: 'app-shift-cipher',
  templateUrl: './shift-cipher.component.html',
  styleUrls: ['./shift-cipher.component.scss']
})
export class ShiftCipherComponent implements OnInit {

  public arguments: FormGroup;
  public cipherText: string;
  public submitted: boolean;

  constructor(private connection: ConnectionService, private normalizer: NormalizerService) {
    this.arguments = new FormGroup(
      {
        key: new FormControl('', [Validators.required, correctKey([1], 0, 25)]),
        plainText: new FormControl('', [Validators.required,
          Validators.pattern('^[a-zA-Z ]+[ ]*[a-zA-Z ]*$')])
      }
    )
    this.cipherText = '';
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

  encrypt():void{
    let normalizedText: string =  this.normalizer
    .setplainText(this.arguments.get('plainText').value);
    this.connection.shiftEncrypt(this.arguments.get('key').value,
     normalizedText).subscribe((ans:textEncyptersReponse) => {
      if (!ans.error) {
       this.cipherText = ans.cipherText;
      }
      this.submitted = true;
  });
  }

  decrypt():void{
    let normalizedText: string =  this.normalizer
    .setplainText(this.arguments.get('plainText').value);
    this.connection.shiftDecrypt(this.arguments.get('key').value,
     normalizedText).subscribe((ans:textDecyptersReponse) => {
      if (!ans.error) {
       this.cipherText = ans.decipherText;
      }
      this.submitted = true;
  });
  }

  get key(): AbstractControl{
    return this.arguments.get('key');
  }
  get plainText(): AbstractControl{
    return this.arguments.get('plainText');
  }
  

}
