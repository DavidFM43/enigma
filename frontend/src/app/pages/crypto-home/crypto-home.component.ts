import { Component, OnInit, OnDestroy } from "@angular/core";
@Component({
  selector: "app-crypto-home",
  templateUrl: "./crypto-home.component.html",
  styleUrls: ["./crypto-home.component.scss"],
})
export class CryptoHomeComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}
