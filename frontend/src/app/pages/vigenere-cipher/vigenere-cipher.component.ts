import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { textDecyptersReponse, textEncyptersReponse } from '../Interfaces';
import { ConnectionService } from '../services/connection.service';
import { NormalizerService } from '../services/normalizer.service';

@Component({
  selector: 'app-vigenere-cipher',
  templateUrl: './vigenere-cipher.component.html',
  styleUrls: ['./vigenere-cipher.component.scss']
})
export class VigenereCipherComponent {

  public arguments: FormGroup;
  public cipherText: string;
  public submitted: boolean;
  public resposeDymcMess: string;

  constructor(private connection: ConnectionService, private normalizer: NormalizerService) {
    this.arguments = new FormGroup(
      {
        key: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]*$')]),
        plainText: new FormControl('', [Validators.required,
          Validators.pattern('^[a-zA-Z ]+[ ]*[a-zA-Z ]*$')])
      }
    )
    this.cipherText = '';
    this.submitted = false;
    this.resposeDymcMess = "";
   }

  random(): void{
    let ranLength: number = Math.floor(Math.random()*8 + 2)
    let arrBase:string[] = Array.from({length: ranLength},
       () => String.fromCharCode(65 + Math.floor(Math.random()*25)));

    this.arguments.patchValue(
      {
        key: arrBase.join("")
      }
    );
  }

 
  encrypt():void{
    let normalizedText: string =  this.normalizer
    .setplainText(this.arguments.get('plainText').value);
    this.connection.vigenereEncrypt(this.arguments.get('key').value,
     normalizedText).subscribe((ans:textEncyptersReponse) => {
      if (!ans.error) {
       this.cipherText = ans.cipherText;
       this.resposeDymcMess = "Cipher"
      }
      this.submitted = true;
  });
  }

  decrypt():void{
    let normalizedText: string =  this.normalizer
    .setplainText(this.arguments.get('plainText').value);
    this.connection.vigenereDecrypt(this.arguments.get('key').value,
     normalizedText).subscribe((ans:textDecyptersReponse) => {
      if (!ans.error) {
       this.cipherText = ans.decipherText;
       this.resposeDymcMess = "Decipher"
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
  forceUpperCase(){
    this.arguments.patchValue(
      {
        key: this.arguments.get('key').value.toUpperCase()
      }
    );
  }
}
