import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-substitution-cipher',
  templateUrl: './substitution-cipher.component.html',
  styleUrls: ['./substitution-cipher.component.scss']
})
export class SubstitutionCipherComponent implements OnInit {


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
    let arrBase = Array.from({length: 26}, (_,i) => i+1);
        
    let inx, aux;
    for(let i=0; i<26; i++){
      inx = Math.floor(Math.random() * 26);
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
