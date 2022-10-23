import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { CryptoHomeComponent } from "./pages/crypto-home/crypto-home.component";
import { CipherComponent } from "./pages/cipher/cipher.component";
import { AttacksComponent } from "./pages/attacks/attacks/attacks.component";
import { BlockCiphersComponent } from "./pages/block-ciphers/block-ciphers.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "template", component: IndexComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "landing", component: LandingpageComponent },
  { path: "home", component: CryptoHomeComponent },
  { path: "cipher", component: CipherComponent },
  { path: "attack", component: AttacksComponent },
  { path: "block", component: BlockCiphersComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
