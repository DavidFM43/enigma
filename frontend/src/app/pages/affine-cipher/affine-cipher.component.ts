import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { textDecyptersReponse, textEncyptersReponse } from '../Interfaces';
import { ConnectionService } from '../services/connection.service';
import { NormalizerService } from '../services/normalizer.service';
import { correctFistKeyAffine, correctKey } from '../shared/correct-key.directive';

@Component({
  selector: 'app-affine-cipher',
  templateUrl: './affine-cipher.component.html',
  styleUrls: ['./affine-cipher.component.scss']
})
export class AffineCipherComponent implements OnInit {
  public arguments: FormGroup;
  private fistKey: number[];
  public cipherText: string;
  public submitted: boolean;


  constructor(private connection: ConnectionService, private normalizer: NormalizerService) {
    this.fistKey = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
    this.arguments = new FormGroup(
      {
        key: new FormControl('', [Validators.required, correctKey([2], 0, 25),
                        correctFistKeyAffine()]),
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
        key:  this.fistKey[Math.floor(Math.random() * (12))]+ ',' + Math.floor(Math.random() * (25))
      }
    );
  }
  
  encrypt():void{
    let normalizedText: string =  this.normalizer
    .setplainText(this.arguments.get('plainText').value);
    let keysArr: number[] = this.arguments.get('key').value.split(',').map(i=>Number(i));
    this.connection.affineEncrypt(keysArr,
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
    let keysArr: number[] = this.arguments.get('key').value.split(',').map(i=>Number(i));
    this.connection.affineDecrypt(keysArr,
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
