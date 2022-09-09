import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private connection: ConnectionService) {
    this.arguments = new FormGroup(
      {
        key: new FormControl('', [Validators.required, correctKey(1)]),
        textToEncrypt: new FormControl('', Validators.pattern('^[a-zA-Z\s]+$', ))
      }
    )
    //this.decryptedText = '';
   }

  ngOnInit(): void {
  }

  random(): void{
    this.arguments.patchValue(
      {
        key: Math.floor(Math.random() * (26))
      }
    );
  }

  submit():void{
    console.log(Number("2.4d"));
    console.log(this.arguments.get('key').errors);
    this.connection.shift(this.arguments.get('key').value,
     this.arguments.get('textToEncrypt').value).subscribe((ans:textEncyptersReponse) => {
      if (!ans.error) {
        console.log("xd");
       this.decryptedText = ans.decryptedText;
      } else {
        //this.flagLog = true;
        //this.error = 'Clave o usuario incorrectos';
      }
      //this.validing = false;
    
  });
  }
  

}
