import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { textDecyptersReponse, textEncyptersReponse } from '../Interfaces';
import { ConnectionService } from '../services/connection.service';
import { NormalizerService } from '../services/normalizer.service';
import { correctKey, isPermutation } from '../shared/correct-key.directive';

@Component({
  selector: 'app-substitution-cipher',
  templateUrl: './substitution-cipher.component.html',
  styleUrls: ['./substitution-cipher.component.scss']
})
export class SubstitutionCipherComponent implements OnInit {

  public arguments: FormGroup;
  public cipherText: string;
  public submitted: boolean;

  constructor(private connection: ConnectionService, private normalizer: NormalizerService) {
    this.arguments = new FormGroup(
      {
        key: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]*$'), isPermutation(26)]),
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
    let arrBase = Array.from({length: 26}, (_,i) => i);
    let key: string="";
        
    let inx, aux;
    for(let i=0; i<26; i++){
      inx = Math.floor(Math.random() * 25);
      aux = arrBase[inx];
      arrBase[inx] = arrBase[i];
      arrBase[i] = aux;
    }
    arrBase.forEach(element => {
      key+= String.fromCharCode(65 + element)
    });
    this.arguments.patchValue(
      {
        key: key
      }
    );
    console.log(this.arguments.get('key').errors);
  }

 
  encrypt():void{
    let normalizedText: string =  this.normalizer
    .setplainText(this.arguments.get('plainText').value);
    this.connection.substitutionEncrypt(this.arguments.get('key').value,
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
    this.connection.substitutionDecrypt(this.arguments.get('key').value,
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
  forceUpperCase(){
    this.arguments.patchValue(
      {
        key: this.arguments.get('key').value.toUpperCase()
      }
    );
  }


}
