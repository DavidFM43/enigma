import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shift-cipher',
  templateUrl: './shift-cipher.component.html',
  styleUrls: ['./shift-cipher.component.scss']
})
export class ShiftCipherComponent implements OnInit {

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
    this.arguments.patchValue(
      {
        key: Math.floor(Math.random() * (26))
      }
    );
  }

  submit():void{
    
  }

}
