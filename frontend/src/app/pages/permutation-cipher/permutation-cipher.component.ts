import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { textDecyptersReponse, textEncyptersReponse } from '../Interfaces';
import { ConnectionService } from '../services/connection.service';
import { NormalizerService } from '../services/normalizer.service';
import { correctKey } from '../shared/correct-key.directive';

@Component({
  selector: 'app-permutation-cipher',
  templateUrl: './permutation-cipher.component.html',
  styleUrls: ['./permutation-cipher.component.scss']
})
export class PermutationCipherComponent implements OnInit {
  public arguments: FormGroup;
  public cipherText: string;
  public submitted: boolean;

  constructor(private connection: ConnectionService, private normalizer: NormalizerService) {
    this.arguments = new FormGroup(
      {
        key: new FormControl('', [Validators.required, correctKey([], 0, 25)]),
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
    let keyLen = Math.floor(Math.random() * 10 + 2);
    let arrBase = Array.from({length: keyLen}, (_,i) => i+1);
        
    let inx, aux;
    for(let i=0; i<keyLen; i++){
      inx = Math.floor(Math.random() * keyLen);
      aux = arrBase[inx];
      arrBase[inx] = arrBase[i];
      arrBase[i] = aux;
    }

    this.arguments.patchValue(
      {
        key: arrBase.toString()
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
