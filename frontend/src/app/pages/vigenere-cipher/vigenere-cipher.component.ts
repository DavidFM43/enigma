import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vigenere-cipher',
  templateUrl: './vigenere-cipher.component.html',
  styleUrls: ['./vigenere-cipher.component.scss']
})
export class VigenereCipherComponent implements OnInit {

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
    let keyLength = [4,9,16][Math.floor(Math.random() * 3)];
    let arrBase = Array.from({length: keyLength}, () => Math.floor(Math.random()*256));
    console.log(keyLength ,arrBase);
    this.arguments.patchValue(
      {
        key: arrBase.toString()
      }
    );

  }

 

  submit():void{
    
  }

}
