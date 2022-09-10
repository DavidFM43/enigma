import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { textEncyptersReponse } from '../Interfaces';
import { ConnectionService } from '../services/connection.service';
import { correctKey } from '../shared/correct-key.directive';

@Component({
  selector: 'app-shift-cipher',
  templateUrl: './shift-cipher.component.html',
  styleUrls: ['./shift-cipher.component.scss']
})
export class ShiftCipherComponent implements OnInit {

  public arguments: FormGroup;
  public decryptedText: string;
  public submitted: boolean;

  constructor(private connection: ConnectionService) {
    this.arguments = new FormGroup(
      {
        key: new FormControl('', [Validators.required, correctKey([1], 0, 25)]),
        textToEncrypt: new FormControl('', [Validators.required,
          Validators.pattern('^[a-zA-Z ]+[ ]*[a-zA-Z ]*$')])
      }
    )
    this.decryptedText = '';
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

  submit():void{
    this.connection.shift(this.arguments.get('key').value,
     this.arguments.get('textToEncrypt').value).subscribe((ans:textEncyptersReponse) => {
      if (!ans.error) {
       this.decryptedText = ans.decryptedText;
      }
      this.submitted = true;
  });
  }

  get key(): AbstractControl{
    return this.arguments.get('key');
  }
  get textToEncrypt(): AbstractControl{
    return this.arguments.get('textToEncrypt');
  }
  

}
