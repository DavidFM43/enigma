import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attacks',
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.scss']
})
export class AttacksComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
