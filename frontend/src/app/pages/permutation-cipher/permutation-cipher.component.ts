import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-permutation-cipher',
  templateUrl: './permutation-cipher.component.html',
  styleUrls: ['./permutation-cipher.component.scss']
})
export class PermutationCipherComponent implements OnInit {

  public arguments: FormGroup;

  constructor() {
    this.arguments = new FormGroup(
      {
        key: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]?$|^26$')])
      }
    )
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

 

  submit():void{
    
  }

}
