import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-affine-cipher',
  templateUrl: './affine-cipher.component.html',
  styleUrls: ['./affine-cipher.component.scss']
})
export class AffineCipherComponent implements OnInit {

  public arguments: FormGroup;
  private fistKey: number[];

  constructor() {
    this.fistKey = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23];
    this.arguments = new FormGroup(
      {
        key: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]?$|^26$')])
      }
    )
   }

  ngOnInit(): void {
  }

  random(): void{
    this.arguments.patchValue(
      {
        key:  this.fistKey[Math.floor(Math.random() * (11))]+ ',' + Math.floor(Math.random() * (26))
      }
    );
  }

  submit():void{
    
  }

}
