import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cipher',
  templateUrl: './cipher.component.html',
  styleUrls: ['./cipher.component.scss']
})
export class CipherComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
