import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-squares-presentation',
  templateUrl: './squares-presentation.component.html',
})
export class SquaresPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

}
