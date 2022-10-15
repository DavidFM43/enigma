import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";

import { IndexComponent } from "./index/index.component";
import { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./examples/landingpage/landingpage.component";

import { CryptoHomeComponent } from "./crypto-home/crypto-home.component";
import { CipherComponent } from "./cipher/cipher.component";
import { ShiftCipherComponent } from "./shift-cipher/shift-cipher.component";
import { AffineCipherComponent } from "./affine-cipher/affine-cipher.component";
import { SubstitutionCipherComponent } from "./substitution-cipher/substitution-cipher.component";
import { HillCipherComponent } from "./hill-cipher/hill-cipher.component";
import { PermutationCipherComponent } from "./permutation-cipher/permutation-cipher.component";
import { VigenereCipherComponent } from "./vigenere-cipher/vigenere-cipher.component";
import { correctKey } from "./shared/correct-key.directive";
import { AttacksComponent } from "./attacks/attacks/attacks.component";
import { ShiftAttackComponent } from "./attacks/shift-attack/shift-attack.component";
import { AffineAttackComponent } from "./attacks/affine-attack/affine-attack.component";
import { SubstitutionAttackComponent } from "./attacks/substitution-attack/substitution-attack.component";
import { VigenereAttackComponent } from "./attacks/vigenere-attack/vigenere-attack.component";
import { HillAttackComponent } from "./attacks/hill-attack/hill-attack.component";
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    CryptoHomeComponent,
    CipherComponent,
    ShiftCipherComponent,
    AffineCipherComponent,
    SubstitutionCipherComponent,
    HillCipherComponent,
    PermutationCipherComponent,
    VigenereCipherComponent,
    AttacksComponent,
    ShiftAttackComponent,
    AffineAttackComponent,
    SubstitutionAttackComponent,
    VigenereAttackComponent,
    HillAttackComponent,
    TopBarComponent,
    FooterComponent,
  ],
  exports: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
  ],
  providers: [],
})
export class PagesModule {}
