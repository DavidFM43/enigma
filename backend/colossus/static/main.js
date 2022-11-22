(self["webpackChunkblk_design_system_angular"] = self["webpackChunkblk_design_system_angular"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index/index.component */ 67479);
/* harmony import */ var _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/examples/profilepage/profilepage.component */ 48282);
/* harmony import */ var _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/examples/registerpage/registerpage.component */ 7536);
/* harmony import */ var _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/examples/landingpage/landingpage.component */ 31073);
/* harmony import */ var _pages_crypto_home_crypto_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/crypto-home/crypto-home.component */ 15868);
/* harmony import */ var _pages_cipher_cipher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cipher/cipher.component */ 11581);
/* harmony import */ var _pages_attacks_attacks_attacks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/attacks/attacks/attacks.component */ 63593);
/* harmony import */ var _pages_block_ciphers_block_ciphers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/block-ciphers/block-ciphers.component */ 62795);
/* harmony import */ var _pages_public_key_ciphers_public_key_ciphers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/public-key-ciphers/public-key-ciphers.component */ 17016);
/* harmony import */ var _pages_gamma_cipher_gamma_cipher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/gamma-cipher/gamma-cipher.component */ 18302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);















const routes = [{
  path: "",
  redirectTo: "home",
  pathMatch: "full"
}, {
  path: "template",
  component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent
}, {
  path: "profile",
  component: _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_1__.ProfilepageComponent
}, {
  path: "register",
  component: _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_2__.RegisterpageComponent
}, {
  path: "landing",
  component: _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__.LandingpageComponent
}, {
  path: "home",
  component: _pages_crypto_home_crypto_home_component__WEBPACK_IMPORTED_MODULE_4__.CryptoHomeComponent
}, {
  path: "cipher",
  component: _pages_cipher_cipher_component__WEBPACK_IMPORTED_MODULE_5__.CipherComponent
}, {
  path: "attack",
  component: _pages_attacks_attacks_attacks_component__WEBPACK_IMPORTED_MODULE_6__.AttacksComponent
}, {
  path: "block",
  component: _pages_block_ciphers_block_ciphers_component__WEBPACK_IMPORTED_MODULE_7__.BlockCiphersComponent
}, {
  path: "public",
  component: _pages_public_key_ciphers_public_key_ciphers_component__WEBPACK_IMPORTED_MODULE_8__.PublicKeyCiphersComponent
}, {
  path: "gamma",
  component: _pages_gamma_cipher_gamma_cipher_component__WEBPACK_IMPORTED_MODULE_9__.GammaCipherComponent
}];
let AppRoutingModule = /*#__PURE__*/(() => {
  class AppRoutingModule {}

  AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };

  AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes, {
      useHash: true
    })]
  });
  return AppRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let AppComponent = /*#__PURE__*/(() => {
  class AppComponent {
    constructor(renderer, location, document) {
      this.renderer = renderer;
      this.location = location;
    }

    onWindowScroll(e) {
      if (window.pageYOffset > 100) {
        var element = document.getElementById("navbar-top");

        if (element) {
          element.classList.remove("navbar-transparent");
          element.classList.add("bg-danger");
        }
      } else {
        var element = document.getElementById("navbar-top");

        if (element) {
          element.classList.add("navbar-transparent");
          element.classList.remove("bg-danger");
        }
      }
    }

    ngOnInit() {
      this.onWindowScroll(event);
    }

  }

  AppComponent.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };

  AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) {
          return ctx.onWindowScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
  });
  return AppComponent;
})();

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ 18950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);








let AppModule = /*#__PURE__*/(() => {
  class AppModule {}

  AppModule.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };

  AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, // BsDropdownModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // TooltipModule.forRoot(),
    // CollapseModule.forRoot(),
    // TabsModule.forRoot(),
    _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule, // PaginationModule.forRoot(),
    // AlertModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // CarouselModule.forRoot(),
    // ModalModule.forRoot(),
    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
  return AppModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, // BsDropdownModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // TooltipModule.forRoot(),
    // CollapseModule.forRoot(),
    // TabsModule.forRoot(),
    _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule, // PaginationModule.forRoot(),
    // AlertModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // CarouselModule.forRoot(),
    // ModalModule.forRoot(),
    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 26119:
/*!*************************************!*\
  !*** ./src/app/pages/Interfaces.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 56041:
/*!**********************************************************!*\
  !*** ./src/app/pages/aes-cipher/aes-cipher.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AesCipherComponent": () => (/* binding */ AesCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function AesCipherComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Key can't be empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function AesCipherComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Key must be 16 bytes in hexadecimal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function AesCipherComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AesCipherComponent_div_10_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AesCipherComponent_div_10_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.key.errors == null ? null : ctx_r1.key.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.key.errors == null ? null : ctx_r1.key.errors.pattern);
  }
}

function AesCipherComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const m_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", m_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r13);
  }
}

function AesCipherComponent_div_21_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Initialization vector can't be empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function AesCipherComponent_div_21_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Initialization vector must be 16 bytes in hexadecimal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function AesCipherComponent_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AesCipherComponent_div_21_div_7_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AesCipherComponent_div_21_div_7_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.initializationVector.errors == null ? null : ctx_r14.initializationVector.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.initializationVector.errors == null ? null : ctx_r14.initializationVector.errors.pattern);
  }
}

function AesCipherComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 30)(3, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "IV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AesCipherComponent_div_21_div_7_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-success", ctx_r3.initializationVector.valid && ctx_r3.initializationVector.touched)("has-danger", ctx_r3.initializationVector.invalid && ctx_r3.initializationVector.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.initializationVector.invalid && ctx_r3.initializationVector.dirty);
  }
}

function AesCipherComponent_div_22_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Counter can't be empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function AesCipherComponent_div_22_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Counter must be 16 bytes in hexadecimal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function AesCipherComponent_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AesCipherComponent_div_22_div_7_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AesCipherComponent_div_22_div_7_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.counter.errors == null ? null : ctx_r17.counter.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.counter.errors == null ? null : ctx_r17.counter.errors.pattern);
  }
}

function AesCipherComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 30)(3, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Counter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AesCipherComponent_div_22_div_7_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-success", ctx_r4.counter.valid && ctx_r4.counter.touched)("has-danger", ctx_r4.counter.invalid && ctx_r4.counter.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.counter.invalid && ctx_r4.counter.dirty);
  }
}

function AesCipherComponent_ng_container_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Image name can not have points(.). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function AesCipherComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 35)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AesCipherComponent_ng_container_28_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.addFileGroup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AesCipherComponent_ng_container_28_div_5_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.notAdmit);
  }
}

function AesCipherComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AesCipherComponent_ng_template_29_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.removeFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}

function AesCipherComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.progress, " ");
  }
}

function AesCipherComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ups, intente otra vez.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function AesCipherComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 18)(2, "div")(3, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r10.responseDymcMess, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r10.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}

let AesCipherComponent = /*#__PURE__*/(() => {
  class AesCipherComponent {
    constructor(connection, domS) {
      this.connection = connection;
      this.domS = domS;
      this.modes = ["ECB", "CBC", "OFB", "CFB", "CTR"];
      this.ivModes = ["CBC", "OFB", "CFB"];
      this.file = null;
      this.fileUrl = null;
      this.notAdmit = false;
      this.sending = false;
      this.errorUpload = false;
      this.progress = "";
      this.encrypted = false;
      this.responseDymcMess = "";
    }

    ngOnInit() {
      this.cipherParams = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("AA 07 63 77 AE 1B 8E A6 B7 42 01 59 0B 2C B8 14", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("([0-9A-F]{2} ){15}[0-9A-F]{2}")]),
        mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("ECB", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        initializationVector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("AA 07 63 77 AE 1B 8E A6 B7 42 01 59 0B 2C B8 14", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("([0-9A-F]{2} ){15}[0-9A-F]{2}")]),
        counter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("AA 07 63 77 AE 1B 8E A6 B7 42 01 59 0B 2C B8 14", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("([0-9A-F]{2} ){15}[0-9A-F]{2}")])
      });
    }

    get key() {
      return this.cipherParams.get("key");
    }

    get mode() {
      return this.cipherParams.get("mode");
    }

    get initializationVector() {
      return this.cipherParams.get("initializationVector");
    }

    get counter() {
      return this.cipherParams.get("counter");
    }

    random() {
      let result = [];
      let hexRef = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

      for (let n = 0; n < 16; n++) {
        let hex = [hexRef[Math.floor(Math.random() * 16)], hexRef[Math.floor(Math.random() * 16)]].join("");
        result.push(hex);
      }

      this.key.setValue(result.join(" "));
    }

    submit() {}

    addFileGroup(event) {
      /*
       * Adds image file from selection, only admits valid image file types
       */
      let auxType;
      this.encrypted = false;
      auxType = event.target.files[0].name.substring(event.target.files[0].name.indexOf(".")).toLowerCase();

      if (auxType === ".png" || auxType === ".jpeg" || auxType === ".jpg") {
        this.file = event.target.files[0];
        this.fileUrl = this.domS.bypassSecurityTrustResourceUrl(URL.createObjectURL(event.target.files[0]));
        this.notAdmit = false;
      } else {
        this.notAdmit = true;
      }
    }

    removeFile() {
      this.encrypted = false;
      this.file = null;
      this.notAdmit = false;
    }

    encrypt() {
      /*
       * Encrypts an image. Sends formData with the plain image and matrix key to
       * the server API.
       */
      const formData = new FormData();
      formData.append("file", this.file, "img" + this.file.name.substring(this.file.name.indexOf(".")).toLowerCase());
      formData.append("key", this.key.value);
      formData.append("mode", this.mode.value);

      if (this.ivModes.indexOf(this.mode.value) > -1) {
        formData.append("initializationVector", this.initializationVector.value);
      } else if (this.mode.value === "CTR") {
        formData.append("counter", this.counter.value);
      }

      this.sending = true;
      this.connection.aesEncrypt(formData).subscribe(events => {
        // sending
        if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.UploadProgress) {
          const auxProgress = Math.round(events.loaded / events.total * 100);

          if (auxProgress === 100) {
            this.progress = "Encrypting";
          } else {
            this.progress = "Uploading: " + auxProgress.toString() + "%";
          } // response

        } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.Response) {
          // Can't properly handle errors with blob response type, so this if
          // statement does nothing
          if (events.body["error"]) {
            this.errorUpload = true;
            this.encrypted = false;
          } else {
            this.createImageFromBlob(events.body);
            this.encrypted = true;
            this.responseDymcMess = "Encrypted";
          }

          this.sending = false;
        }
      });
    }

    decrypt() {
      /*
       * Decrypts an image. Sends formData with the plain image and matrix key to
       * the server API.
       */
      const formData = new FormData();
      formData.append("file", this.file, "img" + this.file.name.substring(this.file.name.indexOf(".")).toLowerCase());
      formData.append("key", this.key.value);
      formData.append("mode", this.mode.value);

      if (this.ivModes.indexOf(this.mode.value) > -1) {
        formData.append("initializationVector", this.initializationVector.value);
      } else if (this.mode.value === "CTR") {
        formData.append("counter", this.counter.value);
      }

      this.sending = true;
      this.connection.aesDecrypt(formData).subscribe(events => {
        // sending
        if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.UploadProgress) {
          const auxProgress = Math.round(events.loaded / events.total * 100);

          if (auxProgress === 100) {
            this.progress = "Decrypting";
          } else {
            this.progress = "Uploading: " + auxProgress.toString() + "%";
          } // response

        } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.Response) {
          // Can't properly handle errors with blob response type, so this if
          // statement does nothing
          if (events.body["error"]) {
            this.errorUpload = true;
            this.encrypted = false;
          } else {
            this.createImageFromBlob(events.body);
            this.encrypted = true;
            this.responseDymcMess = "Decrypted";
          }

          this.sending = false;
        }
      });
    }

    createImageFromBlob(image) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      }
    }

  }

  AesCipherComponent.ɵfac = function AesCipherComponent_Factory(t) {
    return new (t || AesCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer));
  };

  AesCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AesCipherComponent,
    selectors: [["app-aes-cipher"]],
    decls: 42,
    vars: 16,
    consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-9", 3, "formGroup"], ["formDir", "ngForm"], ["for", "key"], [1, "form-row"], [1, "col-sm-9", "col-lg-9", "mr-auto"], [1, "form-group"], ["type", "text", "formControlName", "key", "id", "key", "oninput", "this.value = this.value.toUpperCase()", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-3", "col-lg-3", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "row"], [1, "col-sm-6"], ["for", "encryptionMode"], ["id", "encryptionMode", "formControlName", "mode", "required", "", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], [1, "mb-3"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto", 2, "text-align", "center"], [2, "text-align", "center", "margin-top", "10px"], [4, "ngIf", "ngIfElse"], ["elseUploadrer", ""], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [2, "margin-top", "10px"], ["class", "row", 4, "ngIf"], [1, "alert", "alert-danger"], [3, "value"], [1, "form-group", "col-md-9"], ["for", "initializationVector"], ["type", "text", "formControlName", "initializationVector", "id", "initializationVector", "oninput", "this.value = this.value.toUpperCase()", "required", "", 1, "form-control"], ["for", "counter"], ["type", "text", "formControlName", "counter", "id", "counter", "oninput", "this.value = this.value.toUpperCase()", "required", "", 1, "form-control"], ["for", "file-upload-adder"], [1, "addResourcesS"], [1, "far", "fa-plus-square"], ["id", "file-upload-adder", "accept", ".pdf,image/png,image/jpeg,image/jpg", "type", "file", 2, "display", "none", 3, "change"], ["class", "alertForm", 4, "ngIf"], [1, "alertForm"], ["id", "file", 3, "src"], ["type", "button", 1, "btn", "btn-primary", "btn-icon", "btn-round", "mr-1", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "img-fluid", "rounded", "shadow", 3, "src"]],
    template: function AesCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2, 3)(4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AesCipherComponent_div_10_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AesCipherComponent_Template_button_click_12_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Random Key ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "div", 7)(17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Encryption Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AesCipherComponent_option_20_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AesCipherComponent_div_21_Template, 8, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AesCipherComponent_div_22_Template, 8, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18)(24, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Select an image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 20)(27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AesCipherComponent_ng_container_28_Template, 6, 1, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AesCipherComponent_ng_template_29_Template, 3, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12)(32, "div", 24)(33, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AesCipherComponent_Template_button_click_33_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24)(36, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AesCipherComponent_Template_button_click_36_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, AesCipherComponent_div_39_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AesCipherComponent_div_40_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AesCipherComponent_div_41_Template, 7, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.cipherParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-success", ctx.key.valid && ctx.key.touched)("has-danger", ctx.key.invalid && ctx.key.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.key.invalid && ctx.key.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.modes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ivModes.indexOf(ctx.cipherParams.value.mode) > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cipherParams.value.mode === "CTR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.file == null)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.file == null || ctx.cipherParams.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.file == null || ctx.cipherParams.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sending);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.encrypted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.addResourcesS[_ngcontent-%COMP%] {\n  font-size: 38px;\n  color: #454880;\n  border: 2px dashed #454880;\n  border-radius: 10px;\n  display: inline-block;\n  padding: 2rem 5rem;\n}\n\n#file[_ngcontent-%COMP%] {\n  max-width: 300px;\n  height: auto;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: #171941;\n}\n\n.random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFlcy1jaXBoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxrQkFBQTtBQUtGOztBQUhBO0VBQ0UsVUFBQTtBQU1GOztBQUpBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVFGOztBQU5BO0VBQ0Usa0JBQUE7QUFTRjs7QUFQQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtBQVVGIiwiZmlsZSI6ImFlcy1jaXBoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuZG9tLWJ0bi1jb250IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJhbmRvbS1idG4ge1xuICBtYXJnaW46IDAlO1xufVxuLnRleHJ0b2NyIHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtaW4taGVpZ2h0OiAxMHJlbTtcbn1cbi50ZXh0a2V5IHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAzcmVtO1xufVxuLmFkZFJlc291cmNlc1Mge1xuICBmb250LXNpemU6IDM4cHg7XG4gIGNvbG9yOiAjNDU0ODgwO1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzQ1NDg4MDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycmVtIDVyZW07XG59XG5cbiNmaWxlIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG59XG5cbi5yYW5kb20tYnRuLWNvbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmFuZG9tLWJ0biB7XG4gIG1hcmdpbjogMCU7XG59XG4udGV4cnRvY3Ige1xuICBib3JkZXI6IDFlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxOTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xuICBib3JkZXItcmFkaXVzOiAwLjQyODVyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xufVxuLnRleHRrZXkge1xuICBib3JkZXI6IDFlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxOTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xuICBib3JkZXItcmFkaXVzOiAwLjQyODVyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDNyZW07XG59XG4uc3VibWl0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBsYWluVGV4dEVycm9yIHtcbiAgYm9yZGVyOiAwLjA5cmVtIHNvbGlkICNmMzM2MjAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNlYzI1MGQ7XG59XG4iXX0= */"]
  });
  return AesCipherComponent;
})();

/***/ }),

/***/ 3562:
/*!****************************************************************!*\
  !*** ./src/app/pages/affine-cipher/affine-cipher.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffineCipherComponent": () => (/* binding */ AffineCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/correct-key.directive */ 5975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function AffineCipherComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function AffineCipherComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div")(3, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 10)(6, "blockquote")(7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.resposeDymcMess, " text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.cipherText, " ");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let AffineCipherComponent = /*#__PURE__*/(() => {
  class AffineCipherComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.fistKey = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.correctKey)([2], 0, 25), (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.correctFistKeyAffine)()]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$")])
      });
      this.cipherText = "";
      this.submitted = false;
      this.resposeDymcMess = "";
    }

    ngOnInit() {}

    random() {
      this.arguments.patchValue({
        key: this.fistKey[Math.floor(Math.random() * 12)] + "," + Math.floor(Math.random() * 25)
      });
    }

    encrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      let keysArr = this.arguments.get("key").value.split(",").map(i => Number(i));
      this.connection.affineEncrypt(keysArr, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.resposeDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      let keysArr = this.arguments.get("key").value.split(",").map(i => Number(i));
      this.connection.affineDecrypt(keysArr, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }

        this.submitted = true;
      });
    }

    get key() {
      return this.arguments.get("key");
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

  }

  AffineCipherComponent.ɵfac = function AffineCipherComponent_Factory(t) {
    return new (t || AffineCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__.NormalizerService));
  };

  AffineCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AffineCipherComponent,
    selectors: [["app-affine-cipher"]],
    decls: 20,
    vars: 9,
    consts: [[3, "formGroup"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-lg-6", "ml-auto"], [3, "ngClass"], ["placeholder", "Key", "type", "text", "autofocus", "", "formControlName", "key", 1, "form-control"], [3, "ngIf"], [1, "col-sm-3", "col-lg-3", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "input-group-append"], [1, "input-group-text"], [1, "tim-icons", "icon-lock-circle"], [1, "mb-3"], [1, "blockquote", "blockquote-danger"]],
    template: function AffineCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AffineCipherComponent_ng_template_6_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AffineCipherComponent_Template_button_click_8_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AffineCipherComponent_Template_button_click_14_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12)(17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AffineCipherComponent_Template_button_click_17_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AffineCipherComponent_div_19_Template, 9, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.key.invalid && ctx.key.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.key.invalid || !ctx.key.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmZmluZS1jaXBoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtBQUlGOztBQUZBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0FBS0YiLCJmaWxlIjoiYWZmaW5lLWNpcGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYW5kb20tYnRuLWNvbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmFuZG9tLWJ0biB7XG4gIG1hcmdpbjogMCU7XG59XG4udGV4cnRvY3Ige1xuICBib3JkZXI6IDFlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxOTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xuICBib3JkZXItcmFkaXVzOiAwLjQyODVyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xufVxuLnN1Ym1pdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGFpblRleHRFcnJvciB7XG4gIGJvcmRlcjogMC4wOXJlbSBzb2xpZCAjZjMzNjIwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZWMyNTBkO1xufVxuIl19 */"]
  });
  return AffineCipherComponent;
})();

/***/ }),

/***/ 28058:
/*!************************************************************************!*\
  !*** ./src/app/pages/attacks/affine-attack/affine-attack.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffineAttackComponent": () => (/* binding */ AffineAttackComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);







function AffineAttackComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div")(3, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Decipher text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9)(6, "div", 10)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Possible Text:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10)(12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Possible key:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.plainText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r0.key[0], ", ", ctx_r0.key[1], " ");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let AffineAttackComponent = /*#__PURE__*/(() => {
  class AffineAttackComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
        cipherText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("[a-zA-Z][a-zA-Z ]*$")])
      });
      this.plainText = "";
      this.key = null;
      this.submitted = false;
    }

    ngOnInit() {}

    attack() {
      let normalizedText = this.normalizer.setcipherText(this.arguments.get("cipherText").value);
      this.connection.affineAttack(normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.plainText = ans.plainText;
          this.key = ans.key;
        }

        this.submitted = true;
      });
    }

    get cipherText() {
      return this.arguments.get("cipherText");
    }

  }

  AffineAttackComponent.ɵfac = function AffineAttackComponent_Factory(t) {
    return new (t || AffineAttackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_1__.NormalizerService));
  };

  AffineAttackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AffineAttackComponent,
    selectors: [["app-affine-attack"]],
    decls: 9,
    vars: 6,
    consts: [[3, "formGroup"], [1, "container"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to decrypt", "formControlName", "cipherText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "mb-3"], [1, "col-sm-8", "col-lg-10", "mr-auto", "ml-auto", "test", 2, "margin-right", "10px"], [1, "col-sm-8", "col-lg-10", "mr-auto", "ml-auto"]],
    template: function AffineAttackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AffineAttackComponent_Template_button_click_6_listener() {
          return ctx.attack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AffineAttackComponent_div_8_Template, 15, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.cipherText.invalid && ctx.cipherText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.tr-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.test[_ngcontent-%COMP%] {\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 20px;\n  margin-top: 10px;\n}\n\n.tests[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmZmluZS1hdHRhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtBQUlGOztBQUZBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtBQU9GOztBQUxBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsZ0JBQUE7QUFTRiIsImZpbGUiOiJhZmZpbmUtYXR0YWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmRvbS1idG4tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYW5kb20tYnRuIHtcbiAgbWFyZ2luOiAwJTtcbn1cbi50ZXhydG9jciB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG59XG4uc3VibWl0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBsYWluVGV4dEVycm9yIHtcbiAgYm9yZGVyOiAwLjA5cmVtIHNvbGlkICNmMzM2MjAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNlYzI1MGQ7XG59XG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnRyLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRlc3RzIGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiJdfQ== */"]
  });
  return AffineAttackComponent;
})();

/***/ }),

/***/ 63593:
/*!************************************************************!*\
  !*** ./src/app/pages/attacks/attacks/attacks.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttacksComponent": () => (/* binding */ AttacksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var _shift_attack_shift_attack_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shift-attack/shift-attack.component */ 28237);
/* harmony import */ var _affine_attack_affine_attack_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../affine-attack/affine-attack.component */ 28058);
/* harmony import */ var _substitution_attack_substitution_attack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../substitution-attack/substitution-attack.component */ 5903);
/* harmony import */ var _vigenere_attack_vigenere_attack_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vigenere-attack/vigenere-attack.component */ 26445);
/* harmony import */ var _hill_attack_hill_attack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hill-attack/hill-attack.component */ 33818);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../top-bar/top-bar.component */ 82402);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../footer/footer.component */ 73024);









let AttacksComponent = /*#__PURE__*/(() => {
  class AttacksComponent {
    constructor() {}

    ngOnInit() {}

  }

  AttacksComponent.ɵfac = function AttacksComponent_Factory(t) {
    return new (t || AttacksComponent)();
  };

  AttacksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AttacksComponent,
    selectors: [["app-attacks"]],
    decls: 27,
    vars: 0,
    consts: [[1, "index-page", "wrapper"], [1, "page-header", "header-filter"], [1, "container"], [1, "content-center", "brand"], [1, "h1-seo"], [1, "col-md-10", "ml-auto", "col-xl-8", "mr-auto"], [1, "mb-3"], [1, "card"], [1, "card-header"], [1, "nav-tabs-danger"], ["heading", "Shift Cipher"], ["heading", "Affine Cipher"], ["heading", "Substitution Cipher"], ["heading", "Hill Cipher"], ["heading", "Permutation Cipher"], ["heading", "Vigen\u00E8re Cipher"]],
    template: function AttacksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u2203nigma\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Attack and Decrypt!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "tabset", 9)(14, "tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-shift-attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "app-affine-attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "app-substitution-attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "app-hill-attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "app-hill-attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "app-vigenere-attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "app-footer");
      }
    },
    dependencies: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsetComponent, _shift_attack_shift_attack_component__WEBPACK_IMPORTED_MODULE_1__.ShiftAttackComponent, _affine_attack_affine_attack_component__WEBPACK_IMPORTED_MODULE_2__.AffineAttackComponent, _substitution_attack_substitution_attack_component__WEBPACK_IMPORTED_MODULE_3__.SubstitutionAttackComponent, _vigenere_attack_vigenere_attack_component__WEBPACK_IMPORTED_MODULE_4__.VigenereAttackComponent, _hill_attack_hill_attack_component__WEBPACK_IMPORTED_MODULE_5__.HillAttackComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__.TopBarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
    styles: [".info[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  max-height: 70vh !important;\n  min-height: 70vh !important;\n  height: 70vh;\n}\n\n.random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGFja3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7QUFFRjs7QUFBQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUZBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7QUFPRjs7QUFMQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtBQVFGIiwiZmlsZSI6ImF0dGFja3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ucGFnZS1oZWFkZXIge1xuICBtYXgtaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDcwdmggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuXG4ucmFuZG9tLWJ0bi1jb250IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJhbmRvbS1idG4ge1xuICBtYXJnaW46IDAlO1xufVxuLnRleHJ0b2NyIHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtaW4taGVpZ2h0OiAxMHJlbTtcbn1cbi50ZXh0a2V5IHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAzcmVtO1xufVxuLnN1Ym1pdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGFpblRleHRFcnJvciB7XG4gIGJvcmRlcjogMC4wOXJlbSBzb2xpZCAjZjMzNjIwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZWMyNTBkO1xufVxuIl19 */"]
  });
  return AttacksComponent;
})();

/***/ }),

/***/ 33818:
/*!********************************************************************!*\
  !*** ./src/app/pages/attacks/hill-attack/hill-attack.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HillAttackComponent": () => (/* binding */ HillAttackComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Interfaces */ 26119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);









function HillAttackComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function HillAttackComponent_div_16_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr")(2, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](opt_r4);
  }
}

function HillAttackComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div")(3, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Decipher text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "tab", 17)(7, "div", 18)(8, "table", 19)(9, "thead", 20)(10, "tr")(11, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, HillAttackComponent_div_16_ng_container_14_Template, 4, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.options);
  }
}

function HillAttackComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div")(3, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.options.typeError);
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let HillAttackComponent = /*#__PURE__*/(() => {
  class HillAttackComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$")]),
        cipherText: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$")]),
        keySize: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[1-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(4)])
      });
      this.options = null;
      this.submitted = false;
      this.error = false;
    }

    ngOnInit() {}

    random() {
      this.arguments.patchValue({
        key: Math.floor(Math.random() * 25).toString()
      });
    }

    attack() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      let normalizedTextCipher = this.normalizer.setplainText(this.arguments.get("cipherText").value);
      this.connection.hillAttack(normalizedTextCipher, normalizedText, parseInt(this.keySize.value)).subscribe(ans => {
        this.options = ans.possibleKeys;

        if (!ans.error) {
          this.error = false;
        } else {
          this.error = true;
        }

        this.submitted = true;
      });
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

    get keySize() {
      return this.arguments.get("keySize");
    }

    get cipherText() {
      return this.arguments.get("cipherText");
    }

  }

  HillAttackComponent.ɵfac = function HillAttackComponent_Factory(t) {
    return new (t || HillAttackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__.NormalizerService));
  };

  HillAttackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HillAttackComponent,
    selectors: [["app-hill-attack"]],
    decls: 18,
    vars: 12,
    consts: [[3, "formGroup"], [1, "container"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Plain text", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-10", "col-lg-12", "ml-auto", "mr-auto"], [3, "ngClass"], ["placeholder", "Key size", "type", "text", "formControlName", "keySize", 1, "form-control"], [3, "ngIf"], ["placeholder", "Cipher text", "formControlName", "cipherText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "input-group-append"], [1, "input-group-text"], [1, "tim-icons", "icon-lock-circle"], [1, "mb-3"], ["heading", ""], [1, "table-responsive"], ["id", "plain-table", 1, "table", "tablesorter"], [1, "text-danger"], [1, "header", "tr-center"], [4, "ngFor", "ngForOf"], [1, "tr-center"]],
    template: function HillAttackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, HillAttackComponent_ng_template_9_Template, 3, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2)(11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HillAttackComponent_Template_button_click_14_listener() {
          return ctx.attack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, HillAttackComponent_div_16_Template, 15, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, HillAttackComponent_div_17_Template, 8, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.keySize.invalid && ctx.keySize.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.keySize.invalid || !ctx.keySize.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, ctx.cipherText.invalid && ctx.cipherText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__.TabDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.tr-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpbGwtYXR0YWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFGQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7QUFPRiIsImZpbGUiOiJoaWxsLWF0dGFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYW5kb20tYnRuLWNvbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmFuZG9tLWJ0biB7XG4gIG1hcmdpbjogMCU7XG59XG4udGV4cnRvY3Ige1xuICBib3JkZXI6IDFlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxOTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xuICBib3JkZXItcmFkaXVzOiAwLjQyODVyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xufVxuLnN1Ym1pdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGFpblRleHRFcnJvciB7XG4gIGJvcmRlcjogMC4wOXJlbSBzb2xpZCAjZjMzNjIwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZWMyNTBkO1xufVxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi50ci1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"]
  });
  return HillAttackComponent;
})();

/***/ }),

/***/ 28237:
/*!**********************************************************************!*\
  !*** ./src/app/pages/attacks/shift-attack/shift-attack.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftAttackComponent": () => (/* binding */ ShiftAttackComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);








function ShiftAttackComponent_div_8_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr")(2, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](opt_r2);
  }
}

function ShiftAttackComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div")(3, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Decipher text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "tab", 9)(7, "div", 10)(8, "table", 11)(9, "thead", 12)(10, "tr")(11, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Text Decryption Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ShiftAttackComponent_div_8_ng_container_16_Template, 6, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.options);
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let ShiftAttackComponent = /*#__PURE__*/(() => {
  class ShiftAttackComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$")])
      });
      this.options = [];
      this.submitted = false;
    }

    ngOnInit() {}

    random() {
      this.arguments.patchValue({
        key: Math.floor(Math.random() * 25).toString()
      });
    }

    attack() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      this.connection.shiftAttack(normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.options = ans.options;
        }

        this.submitted = true;
      });
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

  }

  ShiftAttackComponent.ɵfac = function ShiftAttackComponent_Factory(t) {
    return new (t || ShiftAttackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_1__.NormalizerService));
  };

  ShiftAttackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ShiftAttackComponent,
    selectors: [["app-shift-attack"]],
    decls: 9,
    vars: 6,
    consts: [[3, "formGroup"], [1, "container"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "mb-3"], ["heading", ""], [1, "table-responsive"], ["id", "plain-table", 1, "table", "tablesorter"], [1, "text-danger"], [1, "header", "tr-center"], [4, "ngFor", "ngForOf"], [1, "tr-center"]],
    template: function ShiftAttackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShiftAttackComponent_Template_button_click_6_listener() {
          return ctx.attack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ShiftAttackComponent_div_8_Template, 17, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__.TabDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.tr-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaWZ0LWF0dGFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7QUFNRjs7QUFKQTtFQUNFLGtCQUFBO0FBT0YiLCJmaWxlIjoic2hpZnQtYXR0YWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmRvbS1idG4tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYW5kb20tYnRuIHtcbiAgbWFyZ2luOiAwJTtcbn1cbi50ZXhydG9jciB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG59XG4uc3VibWl0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBsYWluVGV4dEVycm9yIHtcbiAgYm9yZGVyOiAwLjA5cmVtIHNvbGlkICNmMzM2MjAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNlYzI1MGQ7XG59XG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnRyLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"]
  });
  return ShiftAttackComponent;
})();

/***/ }),

/***/ 5903:
/*!************************************************************************************!*\
  !*** ./src/app/pages/attacks/substitution-attack/substitution-attack.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionAttackComponent": () => (/* binding */ SubstitutionAttackComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Interfaces */ 26119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function SubstitutionAttackComponent_div_8_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const j_r8 = ctx.index;
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", i_r5 * 3 + j_r8 + 1, ": ", ctx_r6.resp.analysis.bigrams[i_r5 * 3 + j_r8][0], ",", ctx_r6.resp.analysis.bigrams[i_r5 * 3 + j_r8][1], " ");
  }
}

function SubstitutionAttackComponent_div_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionAttackComponent_div_8_ng_container_5_ng_container_2_Template, 3, 3, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 1, ctx_r2.resp.analysis.bigrams, i_r5 * 3, i_r5 * 3 + ctx_r2.getShiftBi(i_r5)));
  }
}

function SubstitutionAttackComponent_div_8_ng_container_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const j_r14 = ctx.index;
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", i_r11 * 3 + j_r14 + 1, ": ", ctx_r12.resp.analysis.letters[i_r11 * 3 + j_r14][0], ",", ctx_r12.resp.analysis.letters[i_r11 * 3 + j_r14][1], " ");
  }
}

function SubstitutionAttackComponent_div_8_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionAttackComponent_div_8_ng_container_11_ng_container_2_Template, 3, 3, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 1, ctx_r3.resp.analysis.letters, i_r11 * 3, i_r11 * 3 + ctx_r3.getShiftLet(i_r11)));
  }
}

function SubstitutionAttackComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Bigrams");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SubstitutionAttackComponent_div_8_ng_container_5_Template, 4, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Letters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SubstitutionAttackComponent_div_8_ng_container_11_Template, 4, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](6, 2, ctx_r0.resp.analysis.bigrams, 0, ctx_r0.limitMntsBi));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](12, 6, ctx_r0.resp.analysis.letters, 0, ctx_r0.limitMntsLet));
  }
}

function SubstitutionAttackComponent_div_9_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const j_r21 = ctx.index;
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", i_r18 * 3 + j_r21 + 1, ": ", ctx_r19.resp.analysis.trigrams[i_r18 * 3 + j_r21][0], ",", ctx_r19.resp.analysis.trigrams[i_r18 * 3 + j_r21][1], " ");
  }
}

function SubstitutionAttackComponent_div_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubstitutionAttackComponent_div_9_ng_container_5_ng_container_2_Template, 3, 3, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 1, ctx_r16.resp.analysis.trigrams, i_r18 * 3, i_r18 * 3 + ctx_r16.getShiftTri(i_r18)));
  }
}

function SubstitutionAttackComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Bigrams");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SubstitutionAttackComponent_div_9_ng_container_5_Template, 4, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](6, 1, ctx_r1.resp.analysis.trigrams, 0, ctx_r1.limitMntsTri));
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let SubstitutionAttackComponent = /*#__PURE__*/(() => {
  class SubstitutionAttackComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$")])
      });
      this.submitted = false;
      this.resp = null;
    }

    ngOnInit() {}

    random() {
      this.arguments.patchValue({
        key: Math.floor(Math.random() * 25).toString()
      });
    }

    attack() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      this.connection.substitutionAttack(normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.resp = ans;
        }

        this.submitted = true;
      });
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

    get limitMntsBi() {
      return Math.ceil(this.resp.analysis.bigrams.length / 3);
    }

    getShiftBi(i) {
      return i * 3 + 3 <= this.resp.analysis.bigrams.length ? 3 : this.resp.analysis.bigrams.length - i * 3;
    }

    get limitMntsLet() {
      return Math.ceil(this.resp.analysis.letters.length / 3);
    }

    getShiftLet(i) {
      return i * 3 + 3 <= this.resp.analysis.letters.length ? 3 : this.resp.analysis.letters.length - i * 3;
    }

    get limitMntsTri() {
      return Math.ceil(this.resp.analysis.trigrams.length / 3);
    }

    getShiftTri(i) {
      return i * 3 + 3 <= this.resp.analysis.trigrams.length ? 3 : this.resp.analysis.trigrams.length - i * 3;
    }

  }

  SubstitutionAttackComponent.ɵfac = function SubstitutionAttackComponent_Factory(t) {
    return new (t || SubstitutionAttackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__.NormalizerService));
  };

  SubstitutionAttackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SubstitutionAttackComponent,
    selectors: [["app-substitution-attack"]],
    decls: 10,
    vars: 7,
    consts: [[3, "formGroup"], [1, "container"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row tests", 4, "ngIf"], [1, "row", "tests"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "test", 2, "margin-right", "10px"], [4, "ngFor", "ngForOf"], [1, "col-sm-4", "col-lg-4", "mr-auto", "ml-auto"]],
    template: function SubstitutionAttackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionAttackComponent_Template_button_click_6_listener() {
          return ctx.attack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SubstitutionAttackComponent_div_8_Template, 13, 10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SubstitutionAttackComponent_div_9_Template, 7, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.tr-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.test[_ngcontent-%COMP%] {\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 20px;\n  margin-top: 10px;\n}\n\n.tests[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnN0aXR1dGlvbi1hdHRhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtBQUlGOztBQUZBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtBQU9GOztBQUxBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsZ0JBQUE7QUFTRiIsImZpbGUiOiJzdWJzdGl0dXRpb24tYXR0YWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmRvbS1idG4tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYW5kb20tYnRuIHtcbiAgbWFyZ2luOiAwJTtcbn1cbi50ZXhydG9jciB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG59XG4uc3VibWl0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBsYWluVGV4dEVycm9yIHtcbiAgYm9yZGVyOiAwLjA5cmVtIHNvbGlkICNmMzM2MjAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNlYzI1MGQ7XG59XG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnRyLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRlc3RzIGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiJdfQ== */"]
  });
  return SubstitutionAttackComponent;
})();

/***/ }),

/***/ 26445:
/*!****************************************************************************!*\
  !*** ./src/app/pages/attacks/vigenere-attack/vigenere-attack.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VigenereAttackComponent": () => (/* binding */ VigenereAttackComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Interfaces */ 26119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function VigenereAttackComponent_div_9_ng_container_24_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const j_r8 = ctx.index;
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", i_r5 * 3 + j_r8 + 1, ": ", ctx_r6.respNoKey.ioc.mean_iocs[i_r5 * 3 + j_r8], " ");
  }
}

function VigenereAttackComponent_div_9_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, VigenereAttackComponent_div_9_ng_container_24_ng_container_2_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 1, ctx_r3.respNoKey.ioc.mean_iocs, i_r5 * 3, i_r5 * 3 + ctx_r3.getShift(i_r5)));
  }
}

function VigenereAttackComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Kasiski Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Most Common Trigram:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3)(10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Positions in the text:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3)(15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Guess:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15)(19, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Index Of Coincidence");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 3)(22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Mean index of confidence per substrings of size k:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, VigenereAttackComponent_div_9_ng_container_24_Template, 4, 5, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 3)(27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Size with highest mean index of confidence:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.respNoKey.kasiski.trg.join(""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.respNoKey.kasiski.trg_indices, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.respNoKey.kasiski.m_kasiski, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](25, 5, ctx_r0.respNoKey.ioc.mean_iocs, 0, ctx_r0.limitMnts));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.respNoKey.ioc.m_ioc, " ");
  }
}

function VigenereAttackComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function VigenereAttackComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div")(3, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Possible Decipher Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "blockquote")(7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.respKey.possiblePlainText, " ");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let VigenereAttackComponent = /*#__PURE__*/(() => {
  class VigenereAttackComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
        keySize: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[1-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(7)]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$")])
      });
      this.submitted = false;
      this.respKey = null;
      this.respNoKey = null;
    }

    ngOnInit() {}

    noKeyAttack() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      this.connection.vigenereNoKeyAttack(normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.respNoKey = ans;

          for (let i = 0; i < this.respNoKey.ioc.mean_iocs.length; i++) {
            this.respNoKey.ioc.mean_iocs[i] = parseFloat(this.respNoKey.ioc.mean_iocs[i].toFixed(3));
          }
        }

        this.submitted = true;
        this.respKey = null;
      });
    }

    keyAttack() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      this.connection.vigenereKeyAttack(parseInt(this.keySize.value), normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.respKey = ans;
        }

        this.submitted = true;
        this.respNoKey = null;
      });
    }

    get keySize() {
      return this.arguments.get("keySize");
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

    get limitMnts() {
      return Math.ceil(this.respNoKey.ioc.mean_iocs.length / 3);
    }

    getShift(i) {
      return i * 3 + 3 <= this.respNoKey.ioc.mean_iocs.length ? 3 : this.respNoKey.ioc.mean_iocs.length - i * 3;
    }

  }

  VigenereAttackComponent.ɵfac = function VigenereAttackComponent_Factory(t) {
    return new (t || VigenereAttackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__.NormalizerService));
  };

  VigenereAttackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: VigenereAttackComponent,
    selectors: [["app-vigenere-attack"]],
    decls: 21,
    vars: 10,
    consts: [[3, "formGroup"], [1, "container"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row tests", 4, "ngIf"], [1, "col-sm-8", "col-lg-6", "ml-auto", "mr-auto"], [3, "ngClass"], ["placeholder", "Key Size", "type", "text", "autofocus", "", "formControlName", "keySize", 1, "form-control"], [3, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", "tests"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "test", 2, "margin-right", "10px"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "test"], [4, "ngFor", "ngForOf"], [1, "col-sm-4", "col-lg-4", "mr-auto", "ml-auto"], [1, "input-group-append"], [1, "input-group-text"], [1, "tim-icons", "icon-lock-circle"], [1, "mb-3"], [1, "blockquote", "blockquote-danger"]],
    template: function VigenereAttackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VigenereAttackComponent_Template_button_click_7_listener() {
          return ctx.noKeyAttack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Guess Key Size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VigenereAttackComponent_div_9_Template, 30, 9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5)(11, "div", 2)(12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, VigenereAttackComponent_ng_template_15_Template, 3, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 2)(17, "div", 5)(18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VigenereAttackComponent_Template_button_click_18_listener() {
          return ctx.keyAttack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Attack ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, VigenereAttackComponent_div_20_Template, 9, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.plainText.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.respNoKey != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.keySize.invalid && ctx.keySize.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.keySize.invalid || !ctx.keySize.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.respKey != null);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  min-height: 10rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.tr-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.input-group[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.test[_ngcontent-%COMP%] {\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 20px;\n  margin-top: 10px;\n}\n\n.tests[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZ2VuZXJlLWF0dGFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7QUFNRjs7QUFKQTtFQUNFLGtCQUFBO0FBT0Y7O0FBTEE7O0VBRUUsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFQQTtFQUNFLGdCQUFBO0FBVUYiLCJmaWxlIjoidmlnZW5lcmUtYXR0YWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmRvbS1idG4tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYW5kb20tYnRuIHtcbiAgbWFyZ2luOiAwJTtcbn1cbi50ZXhydG9jciB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG59XG4uc3VibWl0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnBsYWluVGV4dEVycm9yIHtcbiAgYm9yZGVyOiAwLjA5cmVtIHNvbGlkICNmMzM2MjAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNlYzI1MGQ7XG59XG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnRyLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnB1dC1ncm91cCxcbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi50ZXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRlc3RzIGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiJdfQ== */"]
  });
  return VigenereAttackComponent;
})();

/***/ }),

/***/ 62795:
/*!****************************************************************!*\
  !*** ./src/app/pages/block-ciphers/block-ciphers.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockCiphersComponent": () => (/* binding */ BlockCiphersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../top-bar/top-bar.component */ 82402);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 73024);
/* harmony import */ var _squares_presentation_squares_presentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../squares-presentation/squares-presentation.component */ 64887);
/* harmony import */ var _triple_des_cipher_triple_des_cipher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../triple-des-cipher/triple-des-cipher.component */ 63457);
/* harmony import */ var _aes_cipher_aes_cipher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../aes-cipher/aes-cipher.component */ 56041);
/* harmony import */ var _simplified_des_cipher_simplified_des_cipher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../simplified-des-cipher/simplified-des-cipher.component */ 18313);








let BlockCiphersComponent = /*#__PURE__*/(() => {
  class BlockCiphersComponent {
    constructor() {}

    ngOnInit() {}

  }

  BlockCiphersComponent.ɵfac = function BlockCiphersComponent_Factory(t) {
    return new (t || BlockCiphersComponent)();
  };

  BlockCiphersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: BlockCiphersComponent,
    selectors: [["app-block-ciphers"]],
    decls: 14,
    vars: 0,
    consts: [[1, "col-md-10", "ml-auto", "col-xl-8", "mr-auto"], [1, "mb-3"], [1, "card"], [1, "card-header"], [1, "nav-tabs-danger", "justify-content-center"], ["heading", "Triple DES"], ["heading", "AES"], ["heading", "Simplified DES"]],
    template: function BlockCiphersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-top-bar")(1, "app-squares-presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "tabset", 4)(7, "tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-triple-des-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "app-aes-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "app-simplified-des-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-footer");
      }
    },
    dependencies: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsetComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _squares_presentation_squares_presentation_component__WEBPACK_IMPORTED_MODULE_3__.SquaresPresentationComponent, _triple_des_cipher_triple_des_cipher_component__WEBPACK_IMPORTED_MODULE_4__.TripleDesCipherComponent, _aes_cipher_aes_cipher_component__WEBPACK_IMPORTED_MODULE_5__.AesCipherComponent, _simplified_des_cipher_simplified_des_cipher_component__WEBPACK_IMPORTED_MODULE_6__.SimplifiedDesCipherComponent],
    styles: [".info[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrLWNpcGhlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7QUFFRiIsImZpbGUiOiJibG9jay1jaXBoZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbn1cbi5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuIl19 */"]
  });
  return BlockCiphersComponent;
})();

/***/ }),

/***/ 11581:
/*!**************************************************!*\
  !*** ./src/app/pages/cipher/cipher.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CipherComponent": () => (/* binding */ CipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var _shift_cipher_shift_cipher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shift-cipher/shift-cipher.component */ 32439);
/* harmony import */ var _affine_cipher_affine_cipher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../affine-cipher/affine-cipher.component */ 3562);
/* harmony import */ var _substitution_cipher_substitution_cipher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../substitution-cipher/substitution-cipher.component */ 298);
/* harmony import */ var _hill_cipher_hill_cipher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hill-cipher/hill-cipher.component */ 48816);
/* harmony import */ var _permutation_cipher_permutation_cipher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../permutation-cipher/permutation-cipher.component */ 72757);
/* harmony import */ var _vigenere_cipher_vigenere_cipher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vigenere-cipher/vigenere-cipher.component */ 62912);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../top-bar/top-bar.component */ 82402);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ 73024);










let CipherComponent = /*#__PURE__*/(() => {
  class CipherComponent {
    constructor() {}

    ngOnInit() {}

  }

  CipherComponent.ɵfac = function CipherComponent_Factory(t) {
    return new (t || CipherComponent)();
  };

  CipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: CipherComponent,
    selectors: [["app-cipher"]],
    decls: 34,
    vars: 0,
    consts: [[1, "index-page", "wrapper"], [1, "page-header", "header-filter"], [1, "squares", "square1"], [1, "squares", "square2"], [1, "squares", "square3"], [1, "squares", "square4"], [1, "squares", "square5"], [1, "squares", "square6"], [1, "squares", "square7"], [1, "container"], [1, "content-center", "brand"], [1, "h1-seo"], [1, "col-md-10", "ml-auto", "col-xl-8", "mr-auto"], [1, "mb-3"], [1, "card"], [1, "card-header"], [1, "nav-tabs-danger"], ["heading", "Shift Cipher"], ["heading", "Affine Cipher"], ["heading", "Substitution Cipher"], ["heading", "Hill Cipher"], ["heading", "Permutation Cipher"], ["heading", "Vigen\u00E8re Cipher"]],
    template: function CipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "\u2203nigma\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Select a cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "tabset", 16)(21, "tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "app-shift-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "app-affine-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "app-substitution-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "app-hill-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "app-permutation-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "app-vigenere-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "app-footer");
      }
    },
    dependencies: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsetComponent, _shift_cipher_shift_cipher_component__WEBPACK_IMPORTED_MODULE_1__.ShiftCipherComponent, _affine_cipher_affine_cipher_component__WEBPACK_IMPORTED_MODULE_2__.AffineCipherComponent, _substitution_cipher_substitution_cipher_component__WEBPACK_IMPORTED_MODULE_3__.SubstitutionCipherComponent, _hill_cipher_hill_cipher_component__WEBPACK_IMPORTED_MODULE_4__.HillCipherComponent, _permutation_cipher_permutation_cipher_component__WEBPACK_IMPORTED_MODULE_5__.PermutationCipherComponent, _vigenere_cipher_vigenere_cipher_component__WEBPACK_IMPORTED_MODULE_6__.VigenereCipherComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__.TopBarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent],
    styles: [".info[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGIiwiZmlsZSI6ImNpcGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG4uY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbiJdfQ== */"]
  });
  return CipherComponent;
})();

/***/ }),

/***/ 15868:
/*!************************************************************!*\
  !*** ./src/app/pages/crypto-home/crypto-home.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptoHomeComponent": () => (/* binding */ CryptoHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../top-bar/top-bar.component */ 82402);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 73024);





const _c0 = function () {
  return ["/cipher"];
};

const _c1 = function () {
  return ["/attack"];
};

const _c2 = function () {
  return ["/block"];
};

const _c3 = function () {
  return ["/gamma"];
};

const _c4 = function () {
  return ["/public"];
};

let CryptoHomeComponent = /*#__PURE__*/(() => {
  class CryptoHomeComponent {
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

  CryptoHomeComponent.ɵfac = function CryptoHomeComponent_Factory(t) {
    return new (t || CryptoHomeComponent)();
  };

  CryptoHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CryptoHomeComponent,
    selectors: [["app-crypto-home"]],
    decls: 109,
    vars: 10,
    consts: [[1, "wrapper"], [1, "page-header", "presenter"], ["src", "/static/assets/img/blob.png", 1, "path"], ["src", "/static/assets/img/path2.png", 1, "path2"], ["src", "/static/assets/img/triunghiuri.png", 1, "shapes", "triangle"], ["src", "/static/assets/img/waves.png", 1, "shapes", "wave"], ["src", "/static/assets/img/patrat.png", 1, "shapes", "squares"], ["src", "/static/assets/img/cercuri.png", 1, "shapes", "circle"], [1, "content-center"], [1, "row", "row-grid", "justify-content-between", "align-items-center", "text-left"], [1, "col-lg-6", "col-md-6"], [1, "text-white"], [1, "col-lg-4", "col-md-5"], ["src", "/static/assets/img/lock.png", 1, "lock"], [1, "section", "section-lg", "section-coins"], ["src", "/static/assets/img/path3.png", 1, "path"], [1, "container"], [1, "row"], [1, "col-md-4"], [1, "line-info"], [1, "text-info"], [1, "card", "card-coin", "card-plain"], [1, "card-body"], [1, "col-md-12", "text-center"], [1, "text-uppercase"], [1, "line-primary"], [1, "list-group"], [1, "list-group-item"], [1, "card-footer", "text-center"], [1, "btn", "btn-primary", "btn-simple", 3, "routerLink"], [1, "btn", "btn-info", "btn-simple", 3, "routerLink"], [1, "col-md-6"]],
    template: function CryptoHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2)(4, "img", 3)(5, "img", 4)(6, "img", 5)(7, "img", 6)(8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " We keep your data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " secured ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " A complete system to encrypt, decrypt and perform cryptoanalysis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16)(24, "div", 17)(25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Choose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " your next step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 17)(32, "div", 18)(33, "div", 21)(34, "div", 22)(35, "div", 17)(36, "div", 23)(37, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Classic Ciphers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 17)(41, "ul", 26)(42, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Encrypt & Decrypt all your important texts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 28)(45, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18)(48, "div", 21)(49, "div", 22)(50, "div", 17)(51, "div", 23)(52, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 17)(56, "ul", 26)(57, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Perform cryptanalysis on classic ciphers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 28)(60, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 18)(63, "div", 21)(64, "div", 22)(65, "div", 17)(66, "div", 23)(67, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Block Ciphers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 17)(71, "ul", 26)(72, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "AES, DES3, SDES with their respective encryption modes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 28)(75, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 17)(78, "div", 31)(79, "div", 21)(80, "div", 22)(81, "div", 17)(82, "div", 23)(83, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Gamma Pentagonal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 17)(87, "ul", 26)(88, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " Encrypt your texts and understand what is happening with a simple chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 28)(91, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 31)(94, "div", 21)(95, "div", 22)(96, "div", 17)(97, "div", 23)(98, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Public Key Ciphers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 17)(102, "ul", 26)(103, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " RSA, Rabin and ElGamal(Discrete logarithm and Elliptic Curve variations) ciphers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 28)(106, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c4));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: [".lock[_ngcontent-%COMP%] {\n  max-width: initial;\n  max-height: initial;\n  scale: 1.3;\n}\n\n.info[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.section-coins[_ngcontent-%COMP%] {\n  margin-top: 0%;\n  padding-top: 0%;\n}\n\n.presenter[_ngcontent-%COMP%] {\n  min-height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyeXB0by1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRiIsImZpbGUiOiJjcnlwdG8taG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NrIHtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICBtYXgtaGVpZ2h0OiBpbml0aWFsO1xuICBzY2FsZTogMS4zO1xufVxuLmluZm8ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbn1cbi5zZWN0aW9uLWNvaW5zIHtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIHBhZGRpbmctdG9wOiAwJTtcbn1cbi5wcmVzZW50ZXIge1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuIl19 */"]
  });
  return CryptoHomeComponent;
})();

/***/ }),

/***/ 40210:
/*!********************************************************************!*\
  !*** ./src/app/pages/el-gamal-cipher/el-gamal-cipher.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElGamalCipherComponent": () => (/* binding */ ElGamalCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Interfaces */ 26119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);







function ElGamalCipherComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalCipherComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalCipherComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalCipherComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalCipherComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" (", ctx_r4.P.value, ", ", ctx_r4.G.value, ", ", ctx_r4.H.value, ") ");
  }
}

function ElGamalCipherComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Not set. ");
  }
}

function ElGamalCipherComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.X.value, " ");
  }
}

function ElGamalCipherComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Not set. ");
  }
}

function ElGamalCipherComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 17)(2, "div")(3, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 17)(6, "blockquote")(7, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r10.resposeDymcMess, " text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.cipherText, " ");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let ElGamalCipherComponent = /*#__PURE__*/(() => {
  class ElGamalCipherComponent {
    constructor(connection) {
      this.connection = connection;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
        P: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        G: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        H: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        X: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
      });
      this.cipherText = "";
      this.submitted = false;
      this.resposeDymcMess = "";
      this.isRandomKey = false;
    }

    ngOnInit() {}

    random() {
      this.isRandomKey = true;
      this.connection.ElGamalGetKeys().subscribe(ansKeys => {
        console.log(ansKeys);
        this.arguments.patchValue({
          P: ansKeys.P,
          G: ansKeys.G,
          H: ansKeys.H,
          X: ansKeys.X
        });
        this.isRandomKey = false;
      });
    }

    encrypt() {
      let publicKey = {
        P: this.P.value,
        G: this.G.value,
        H: this.H.value
      };
      this.connection.ElGamalEncrypt(publicKey, this.arguments.get("plainText").value.replace(/ /g, "")).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.resposeDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      let privateKey = {
        P: this.P.value,
        G: this.G.value,
        X: this.X.value
      };
      let arrNums = this.arguments.get("plainText").value.replace(/ /g, "").split(",");
      let regexp = new RegExp(/^[0-9]\d*$/);

      for (let i = 0; i < arrNums.length; i += 2) {
        if (!regexp.test(arrNums[i])) {
          this.cipherText = "Cannot decrypt text";
          return false;
        }
      }

      let arrCop = [];

      for (let i = 0; i < arrNums.length; i += 2) {
        arrCop.push([parseInt(arrNums[i]), parseInt(arrNums[i + 1])]);
      }

      this.connection.ElGamalDecrypt(privateKey, arrCop).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }

        this.submitted = true;
      });
      return true;
    }

    get P() {
      return this.arguments.get("P");
    }

    get G() {
      return this.arguments.get("G");
    }

    get X() {
      return this.arguments.get("X");
    }

    get H() {
      return this.arguments.get("H");
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

  }

  ElGamalCipherComponent.ɵfac = function ElGamalCipherComponent_Factory(t) {
    return new (t || ElGamalCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService));
  };

  ElGamalCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ElGamalCipherComponent,
    selectors: [["app-el-gamal-cipher"]],
    decls: 47,
    vars: 20,
    consts: [[3, "formGroup"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-lg-6", "ml-auto"], [3, "ngClass"], ["placeholder", "P", "type", "text", "autofocus", "", "formControlName", "P", 1, "form-control"], [3, "ngIf"], ["placeholder", "G", "type", "text", "autofocus", "", "formControlName", "G", 1, "form-control"], ["placeholder", "H", "type", "text", "autofocus", "", "formControlName", "H", 1, "form-control"], ["placeholder", "X", "type", "text", "autofocus", "", "formControlName", "X", 1, "form-control"], [1, "row"], [1, "col-md-6"], [4, "ngIf", "ngIfElse"], ["elsePubK", ""], ["elsePrvK", ""], [1, "col-sm-12", "col-lg-12", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "disabled", "click"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "input-group-append"], [1, "input-group-text"], [1, "tim-icons", "icon-lock-circle"], [1, "mb-3"], [1, "blockquote", "blockquote-danger"]],
    template: function ElGamalCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ElGamalCipherComponent_ng_template_6_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ElGamalCipherComponent_ng_template_10_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2)(12, "div", 3)(13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ElGamalCipherComponent_ng_template_15_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3)(17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ElGamalCipherComponent_ng_template_19_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Public Key (p, g, h): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ElGamalCipherComponent_div_24_Template, 2, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ElGamalCipherComponent_ng_template_25_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11)(28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Private Key X: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ElGamalCipherComponent_div_30_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ElGamalCipherComponent_ng_template_31_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "div", 15)(35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ElGamalCipherComponent_Template_button_click_35_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10)(38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 19)(41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ElGamalCipherComponent_Template_button_click_41_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 19)(44, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ElGamalCipherComponent_Template_button_click_44_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, ElGamalCipherComponent_div_46_Template, 9, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);

        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.P.invalid && ctx.P.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.P.invalid || !ctx.P.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.G.invalid && ctx.G.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.G.invalid || !ctx.G.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.H.invalid && ctx.H.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.H.invalid || !ctx.H.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.X.invalid && ctx.X.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.X.invalid || !ctx.X.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.P.value.length != 0 && ctx.G.value.length != 0 && ctx.H.value.length != 0)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.P.value.length != 0 && ctx.G.value.length != 0 && ctx.X.value.length != 0)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isRandomKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n\n.ND-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid #fd5d93;\n  margin-bottom: 10px;\n}\n\n.ND-box[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .ND-box[_ngcontent-%COMP%]   .form-grou[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsLWdhbWFsLWNpcGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFMRTtFQUNFLGtCQUFBO0FBT0oiLCJmaWxlIjoiZWwtZ2FtYWwtY2lwaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmRvbS1idG4tY29udCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5yYW5kb20tYnRuIHtcbiAgICBtYXJnaW46IDAlO1xuICB9XG4gIC50ZXhydG9jciB7XG4gICAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTcxOTQxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gICAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xuICB9XG4gIC5zdWJtaXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucGxhaW5UZXh0RXJyb3Ige1xuICAgIGJvcmRlcjogMC4wOXJlbSBzb2xpZCAjZjMzNjIwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNlYzI1MGQ7XG4gIH1cbi5ORC1ib3h7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDVkOTM7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC5pbnB1dC1ncm91cCwgLmZvcm0tZ3JvdXtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn0iXX0= */"]
  });
  return ElGamalCipherComponent;
})();

/***/ }),

/***/ 15522:
/*!******************************************************************************!*\
  !*** ./src/app/pages/el-gamal-elip-cipher/el-gamal-elip-cipher.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElGamalElipCipherComponent": () => (/* binding */ ElGamalElipCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Interfaces */ 26119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);







function ElGamalElipCipherComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalElipCipherComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalElipCipherComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalElipCipherComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" (", ctx_r3.X.value, ", ", ctx_r3.Y.value, ") ");
  }
}

function ElGamalElipCipherComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Not set. ");
  }
}

function ElGamalElipCipherComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.Pk.value, " ");
  }
}

function ElGamalElipCipherComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Not set. ");
  }
}

function ElGamalElipCipherComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalElipCipherComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalElipCipherComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalElipCipherComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function ElGamalElipCipherComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "blockquote")(2, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.cipherText, " ");
  }
}

function ElGamalElipCipherComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "blockquote")(2, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r14.DecipherTextED, " ");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let ElGamalElipCipherComponent = /*#__PURE__*/(() => {
  class ElGamalElipCipherComponent {
    constructor(connection) {
      this.connection = connection;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
        X: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        Y: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        Pk: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
      });
      this.argumentsDecrypt = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
        cipherTextDE: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        nonce: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        authTag: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        ciphertextPubKey_x: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        ciphertextPubKey_y: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
      });
      this.cipherText = "";
      this.DecipherTextED = "";
      this.submitted = false;
      this.submittedDE = false;
      this.resposeDymcMess = "";
      this.isRandomKey = false;
    }

    ngOnInit() {}

    random() {
      this.isRandomKey = true;
      this.connection.ElGamalElipGetKeys().subscribe(ansKeys => {
        console.log(ansKeys);
        this.arguments.patchValue({
          X: ansKeys.X,
          Y: ansKeys.Y,
          Pk: ansKeys.Pk
        });
        this.isRandomKey = false;
      });
    }

    encrypt() {
      let publicKey = {
        X: this.X.value,
        Y: this.Y.value,
        Pk: this.Pk.value
      };
      this.connection.ElGamalElipEncrypt(publicKey, this.arguments.get("plainText").value.replace(/ /g, "")).subscribe(ans => {
        this.cipherText = ans.cipherText.ciphertext;

        if (!ans.error) {
          this.argumentsDecrypt.patchValue({
            cipherTextDE: ans.cipherText.ciphertext,
            nonce: ans.cipherText.nonce,
            authTag: ans.cipherText.authTag,
            ciphertextPubKey_x: ans.cipherText.ciphertextPubKey_x,
            ciphertextPubKey_y: ans.cipherText.ciphertextPubKey_y
          });
          this.resposeDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      let privateKey = {
        X: this.X.value,
        Y: this.Y.value,
        Pk: this.Pk.value
      };
      let cipherTxt = {
        ciphertext: this.cipherTextDE.value,
        nonce: this.nonce.value,
        authTag: this.authTag.value,
        ciphertextPubKey_x: this.ciphertextPubKey_x.value,
        ciphertextPubKey_y: this.ciphertextPubKey_y.value
      };
      this.connection.ElGamalElipDecrypt(privateKey, cipherTxt).subscribe(ans => {
        if (!ans.error) {
          this.DecipherTextED = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }

        this.submittedDE = true;
      });
      return true;
    }

    get X() {
      return this.arguments.get("X");
    }

    get Y() {
      return this.arguments.get("Y");
    }

    get Pk() {
      return this.arguments.get("Pk");
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

    get nonce() {
      return this.argumentsDecrypt.get("nonce");
    }

    get authTag() {
      return this.argumentsDecrypt.get("authTag");
    }

    get ciphertextPubKey_x() {
      return this.argumentsDecrypt.get("ciphertextPubKey_x");
    }

    get ciphertextPubKey_y() {
      return this.argumentsDecrypt.get("ciphertextPubKey_y");
    }

    get cipherTextDE() {
      return this.argumentsDecrypt.get("cipherTextDE");
    }

  }

  ElGamalElipCipherComponent.ɵfac = function ElGamalElipCipherComponent_Factory(t) {
    return new (t || ElGamalElipCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService));
  };

  ElGamalElipCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ElGamalElipCipherComponent,
    selectors: [["app-el-gamal-elip-cipher"]],
    decls: 73,
    vars: 31,
    consts: [[3, "formGroup"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-lg-6", "ml-auto"], [3, "ngClass"], ["placeholder", "X", "type", "text", "autofocus", "", "formControlName", "X", 1, "form-control"], [3, "ngIf"], ["placeholder", "Y", "type", "text", "autofocus", "", "formControlName", "Y", 1, "form-control"], [1, "col-sm-12", "col-lg-12", "ml-auto"], ["placeholder", "Pk", "type", "text", "autofocus", "", "formControlName", "Pk", 1, "form-control"], [1, "row"], [1, "col-md-6"], [4, "ngIf", "ngIfElse"], ["elsePubK", ""], ["elsePrvK", ""], [1, "col-sm-12", "col-lg-12", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "disabled", "click"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-12", "col-lg-12", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "mb-3"], ["placeholder", "nonce", "type", "text", "autofocus", "", "formControlName", "nonce", 1, "form-control"], ["placeholder", "authTag", "type", "text", "autofocus", "", "formControlName", "authTag", 1, "form-control"], ["placeholder", "ciphertextPubKey_x", "type", "text", "autofocus", "", "formControlName", "ciphertextPubKey_x", 1, "form-control"], ["placeholder", "ciphertextPubKey_y", "type", "text", "autofocus", "", "formControlName", "ciphertextPubKey_y", 1, "form-control"], ["class", "col-sm-12 col-lg-10 mr-auto ml-auto", 4, "ngIf"], ["placeholder", "Text to decrypt", "formControlName", "cipherTextDE", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "row", "justify-content-center", "submit"], [1, "col-sm-12", "col-lg-12", "mr-auto", "ml-auto"], [1, "input-group-append"], [1, "input-group-text"], [1, "tim-icons", "icon-lock-circle"], [1, "blockquote", "blockquote-danger"]],
    template: function ElGamalElipCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ElGamalElipCipherComponent_ng_template_6_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ElGamalElipCipherComponent_ng_template_10_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2)(12, "div", 8)(13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ElGamalElipCipherComponent_ng_template_15_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Public Key (x, y): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ElGamalElipCipherComponent_div_20_Template, 2, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ElGamalElipCipherComponent_ng_template_21_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11)(24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Private Key: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ElGamalElipCipherComponent_div_26_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ElGamalElipCipherComponent_ng_template_27_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10)(30, "div", 15)(31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ElGamalElipCipherComponent_Template_button_click_31_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 19)(37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ElGamalElipCipherComponent_Template_button_click_37_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "form", 0)(40, "div", 1)(41, "div", 10)(42, "div", 17)(43, "div")(44, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Decipher text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 2)(47, "div", 3)(48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, ElGamalElipCipherComponent_ng_template_50_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 3)(52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, ElGamalElipCipherComponent_ng_template_54_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 2)(56, "div", 3)(57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, ElGamalElipCipherComponent_ng_template_59_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 3)(61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, ElGamalElipCipherComponent_ng_template_63_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, ElGamalElipCipherComponent_div_64_Template, 4, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 1)(68, "div", 28)(69, "div", 29)(70, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ElGamalElipCipherComponent_Template_button_click_70_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, ElGamalElipCipherComponent_div_72_Template, 4, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);

        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.X.invalid && ctx.X.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.X.invalid || !ctx.X.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Y.invalid && ctx.Y.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.Y.invalid || !ctx.Y.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Pk.invalid && ctx.Pk.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.Pk.invalid || !ctx.Pk.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.X.value.length != 0 && ctx.Y.value.length != 0)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Pk.value.length != 0)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isRandomKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.argumentsDecrypt);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.nonce.invalid && ctx.nonce.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nonce.invalid || !ctx.nonce.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.authTag.invalid && ctx.authTag.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.authTag.invalid || !ctx.authTag.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.ciphertextPubKey_x.invalid && ctx.ciphertextPubKey_x.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.ciphertextPubKey_x.invalid || !ctx.ciphertextPubKey_x.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.ciphertextPubKey_y.invalid && ctx.ciphertextPubKey_y.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.ciphertextPubKey_y.invalid || !ctx.ciphertextPubKey_y.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c0, ctx.cipherTextDE.invalid && ctx.cipherTextDE.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submittedDE);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n\n.ND-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid #fd5d93;\n  margin-bottom: 10px;\n}\n\n.ND-box[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .ND-box[_ngcontent-%COMP%]   .form-grou[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsLWdhbWFsLWVsaXAtY2lwaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDRTtFQUNFLFVBQUE7QUFFSjs7QUFBRTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7QUFJSjs7QUFGRTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUxFO0VBQ0Usa0JBQUE7QUFPSiIsImZpbGUiOiJlbC1nYW1hbC1lbGlwLWNpcGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYW5kb20tYnRuLWNvbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucmFuZG9tLWJ0biB7XG4gICAgbWFyZ2luOiAwJTtcbiAgfVxuICAudGV4cnRvY3Ige1xuICAgIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtaW4taGVpZ2h0OiAxMHJlbTtcbiAgfVxuICAuc3VibWl0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnBsYWluVGV4dEVycm9yIHtcbiAgICBib3JkZXI6IDAuMDlyZW0gc29saWQgI2YzMzYyMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZWMyNTBkO1xuICB9XG4uTkQtYm94e1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmQ1ZDkzO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAuaW5wdXQtZ3JvdXAsIC5mb3JtLWdyb3V7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59Il19 */"]
  });
  return ElGamalElipCipherComponent;
})();

/***/ }),

/***/ 31073:
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/landingpage/landingpage.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingpageComponent": () => (/* binding */ LandingpageComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 37942);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 78539);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 47273);






const _c0 = function () {
  return ["/home"];
};

const _c1 = function () {
  return ["/landing"];
};

const _c2 = function () {
  return ["/register"];
};

const _c3 = function () {
  return ["/profile"];
};

let LandingpageComponent = /*#__PURE__*/(() => {
  class LandingpageComponent {
    constructor() {
      this.isCollapsed = true;
    }

    ngOnInit() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("landing-page");
      var canvas = document.getElementById("chartBig");
      var ctx = canvas.getContext("2d");
      var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
      gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
      gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
      var chartBig = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(ctx, {
        type: "line",
        responsive: true,
        data: {
          labels: ["JUN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [{
            label: "Data",
            fill: true,
            backgroundColor: gradientFill,
            borderColor: "#e44cc4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#e44cc4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#be55ed",
            //pointHoverBorderColor:'rgba(35,46,55,1)',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
          }]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            backgroundColor: "#fff",
            titleFontColor: "#ccc",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          responsive: true,
          scales: {
            yAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 350,
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }],
            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }]
          }
        }
      });
    }

    ngOnDestroy() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("landing-page");
    }

  }

  LandingpageComponent.ɵfac = function LandingpageComponent_Factory(t) {
    return new (t || LandingpageComponent)();
  };

  LandingpageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LandingpageComponent,
    selectors: [["app-landingpage"]],
    decls: 390,
    vars: 15,
    consts: [["color-on-scroll", "100", "id", "navbar-top", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], ["placement", "bottom", "tooltip", "Designed and Coded by Creative Tim", 1, "navbar-brand", 3, "routerLink"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "navbar-toggler", 3, "click"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "navbar-collapse", "justify-content-end", 3, "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "tim-icons", "icon-simple-remove"], [1, "navbar-nav"], [1, "nav-item", "p-0"], ["href", "https://twitter.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Twitter", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "d-lg-none", "d-xl-none"], ["href", "https://www.facebook.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Like us on Facebook", 1, "nav-link"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com/CreativeTimOfficial", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Instagram", 1, "nav-link"], [1, "fab", "fa-instagram"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["href", "https://github.com/creativetimofficial/blk-design-system-angular/issues", 1, "nav-link"], [1, "wrapper"], [1, "page-header"], ["src", "/static/assets/img/blob.png", 1, "path"], ["src", "/static/assets/img/path2.png", 1, "path2"], ["src", "/static/assets/img/triunghiuri.png", 1, "shapes", "triangle"], ["src", "/static/assets/img/waves.png", 1, "shapes", "wave"], ["src", "/static/assets/img/patrat.png", 1, "shapes", "squares"], ["src", "/static/assets/img/cercuri.png", 1, "shapes", "circle"], [1, "content-center"], [1, "row", "row-grid", "justify-content-between", "align-items-center", "text-left"], [1, "col-lg-6", "col-md-6"], [1, "text-white"], [1, "text-white", "mb-3"], [1, "btn-wrapper", "mb-3"], [1, "category", "text-success", "d-inline", "mr-1"], ["href", "javascript:void(0)", 1, "btn", "btn-success", "btn-link", "btn-sm"], [1, "tim-icons", "icon-minimal-right"], [1, "btn-wrapper"], [1, "button-container"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-simple", "btn-round", "btn-neutral", "mr-1"], [1, "fab", "fa-dribbble"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-simple", "btn-round", "btn-neutral"], [1, "fab", "fa-facebook"], [1, "col-lg-4", "col-md-5"], ["alt", "Circle image", "src", "/static/assets/img/etherum.png", 1, "img-fluid"], [1, "section", "section-lg"], [1, "section"], ["src", "/static/assets/img/path4.png", 1, "path"], [1, "row", "row-grid", "justify-content-between"], [1, "col-md-5", "mt-lg-5"], [1, "col-lg-6", "col-sm-12", "px-2", "py-2"], [1, "card", "card-stats"], [1, "card-body"], [1, "col-5", "col-md-4"], [1, "icon-big", "text-center", "icon-warning"], [1, "tim-icons", "icon-trophy", "text-warning"], [1, "col-7", "col-md-8"], [1, "numbers"], [1, "card-title"], [1, "card-category"], [1, "card", "card-stats", "upper", "bg-default"], [1, "tim-icons", "icon-coins", "text-white"], [1, "tim-icons", "icon-gift-2", "text-info"], [1, "tim-icons", "icon-credit-card", "text-success"], [1, "col-md-6"], [1, "pl-md-5"], ["href", "javascript:void(0)", 1, "font-weight-bold", "text-info", "mt-5"], [1, "tim-icons", "icon-minimal-right", "text-info"], ["src", "/static/assets/img/path5.png", 1, "path2"], ["src", "/static/assets/img/path2.png", 1, "path3"], [1, "row", "justify-content-center"], [1, "col-lg-12"], [1, "text-center"], [1, "row", "row-grid", "justify-content-center"], [1, "col-lg-3"], [1, "info"], [1, "icon", "icon-primary"], [1, "tim-icons", "icon-money-coins"], [1, "info-title"], [1, "line-primary"], [1, "icon", "icon-warning"], [1, "tim-icons", "icon-chart-pie-36"], [1, "line-warning"], [1, "icon", "icon-success"], [1, "tim-icons", "icon-single-02"], [1, "line-success"], [1, "section", "section-lg", "section-safe"], ["src", "/static/assets/img/path5.png", 1, "path"], [1, "col-md-5"], ["src", "/static/assets/img/chester-wade.jpg", 1, "img-fluid", "floating"], [1, "card", "card-stats", "bg-danger"], [1, "justify-content-center"], [1, "card-category", "text-white"], [1, "card", "card-stats", "bg-info"], [1, "card", "card-stats", "bg-default"], [1, "px-md-5"], [1, "list-unstyled", "mt-5"], [1, "py-2"], [1, "d-flex", "align-items-center"], [1, "icon", "icon-success", "mb-2"], [1, "tim-icons", "icon-vector"], [1, "ml-3"], [1, "tim-icons", "icon-tap-02"], [1, "col-md-12"], [1, "card", "card-chart", "card-plain"], [1, "card-header"], [1, "col-sm-6", "text-left"], [1, "chart-area"], ["id", "chartBig"], [1, "section", "section-lg", "section-coins"], ["src", "/static/assets/img/path3.png", 1, "path"], [1, "col-md-4"], [1, "line-info"], [1, "text-info"], [1, "card", "card-coin", "card-plain"], ["src", "/static/assets/img/bitcoin.png", 1, "img-center", "img-fluid"], [1, "col-md-12", "text-center"], [1, "text-uppercase"], [1, "list-group"], [1, "list-group-item"], [1, "card-footer", "text-center"], [1, "btn", "btn-primary", "btn-simple"], ["src", "/static/assets/img/etherum.png", 1, "img-center", "img-fluid"], [1, "btn", "btn-success", "btn-simple"], ["src", "/static/assets/img/ripp.png", 1, "img-center", "img-fluid"], [1, "btn", "btn-info", "btn-simple"], [1, "footer"], [1, "col-md-3"], [1, "title"], [1, "nav"], ["href", "https://creative-tim.com/contact-us?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://creative-tim.com/about-us?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://creative-tim.com/blog?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://opensource.org/licenses/MIT", 1, "nav-link"], [1, "btn-wrapper", "profile"], ["href", "https://twitter.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://www.facebook.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://dribbble.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple"]],
    template: function LandingpageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " BLK\u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Design System Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LandingpageComponent_Template_button_click_7_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 5)(9, "span", 6)(10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " BLK\u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LandingpageComponent_Template_button_click_18_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ul", 15)(21, "li", 16)(22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 16)(27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li", 16)(32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "li", 24)(37, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Back to Kit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "li", 24)(40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Have an issue? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 27)(43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 29)(45, "img", 30)(46, "img", 31)(47, "img", 32)(48, "img", 33)(49, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 35)(51, "div", 36)(52, "div", 37)(53, "h1", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " We keep your coin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " secured ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 40)(61, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "From 9.99%/mo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 44)(66, "div", 45)(67, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "section", 52)(76, "section", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 1)(79, "div", 55)(80, "div", 56)(81, "div", 10)(82, "div", 57)(83, "div", 58)(84, "div", 59)(85, "div", 10)(86, "div", 60)(87, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 63)(90, "div", 64)(91, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "3,237");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 57)(97, "div", 67)(98, "div", 59)(99, "div", 10)(100, "div", 60)(101, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 63)(104, "div", 64)(105, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "3,653");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Commits");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 10)(111, "div", 57)(112, "div", 58)(113, "div", 59)(114, "div", 10)(115, "div", 60)(116, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 63)(119, "div", 64)(120, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "593");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Presents");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 57)(126, "div", 58)(127, "div", 59)(128, "div", 10)(129, "div", 60)(130, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 63)(133, "div", 64)(134, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "10,783");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Forks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 71)(140, "div", 72)(141, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, " Large ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, " Achivements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, " I should be capable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, " When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, " Show all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "section", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "img", 54)(156, "img", 75)(157, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 1)(159, "div", 77)(160, "div", 78)(161, "h1", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "Your best benefit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 80)(164, "div", 81)(165, "div", 82)(166, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Low Commission");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "hr", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, " Divide details about your work into parts. Write a few lines about each one. A paragraph describing a feature will. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 81)(174, "div", 82)(175, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](176, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "High Incomes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "hr", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, " Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing feature will be a feature. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 81)(183, "div", 82)(184, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](185, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "Verified People");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](188, "hr", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, " Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing be enough. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "section", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "div", 1)(194, "div", 55)(195, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](196, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 97)(198, "div", 59)(199, "div", 98)(200, "div", 64)(201, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "p", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "Safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "div", 100)(206, "div", 59)(207, "div", 98)(208, "div", 64)(209, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "573 K");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "p", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Satisfied customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "div", 101)(214, "div", 59)(215, "div", 98)(216, "div", 64)(217, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, "10 425");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "p", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 71)(222, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](223, "hr", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Awesome features");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, " The design system comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "ul", 103)(229, "li", 104)(230, "div", 105)(231, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](232, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 108)(234, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "Carefully crafted components");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "li", 104)(237, "div", 105)(238, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](239, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 108)(241, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "Amazing page examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "li", 104)(244, "div", 105)(245, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](246, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "div", 108)(248, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](249, "Super friendly support team");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "section", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](251, "img", 54)(252, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "div", 110)(254, "div", 111)(255, "div", 112)(256, "div", 10)(257, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](258, "hr", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "h5", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "Total Investments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "h2", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "div", 59)(264, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](265, "canvas", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "section", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](267, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "div", 1)(269, "div", 10)(270, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](271, "hr", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, " Choose the coin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "span", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, " that fits your needs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "div", 10)(277, "div", 118)(278, "div", 121)(279, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](280, "img", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 59)(282, "div", 10)(283, "div", 123)(284, "h4", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, "Light Coin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, " Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](288, "hr", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "div", 10)(290, "ul", 125)(291, "li", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "50 messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "li", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, "100 emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "li", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "24/7 Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "div", 127)(298, "button", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "Get plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "div", 118)(301, "div", 121)(302, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](303, "img", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "div", 59)(305, "div", 10)(306, "div", 123)(307, "h4", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](308, "Dark Coin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](309, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](310, " Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](311, "hr", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "div", 10)(313, "ul", 125)(314, "li", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](315, "150 messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "li", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "1000 emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "li", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](319, "24/7 Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "div", 127)(321, "button", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](322, "Get plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "div", 118)(324, "div", 121)(325, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](326, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "div", 59)(328, "div", 10)(329, "div", 123)(330, "h4", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](331, "Bright Coin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, " Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](334, "hr", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "div", 10)(336, "ul", 125)(337, "li", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, "350 messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "li", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](340, "10K emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "li", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](342, "24/7 Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "div", 127)(344, "button", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](345, "Get plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "footer", 133)(347, "div", 1)(348, "div", 10)(349, "div", 134)(350, "h1", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](351, "BLK\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](352, "div", 134)(353, "ul", 136)(354, "li", 24)(355, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](356, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](357, "li", 24)(358, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, " Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "li", 24)(361, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](362, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](363, "li", 24)(364, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](365, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "div", 134)(367, "ul", 136)(368, "li", 24)(369, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](370, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "li", 24)(372, "a", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](373, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "li", 24)(375, "a", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](376, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "li", 24)(378, "a", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](379, " License ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](380, "div", 134)(381, "h3", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](382, "Follow us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "div", 141)(384, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](385, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "a", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](387, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](388, "a", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](389, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](318);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c3));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseDirective],
    encapsulation: 2
  });
  return LandingpageComponent;
})();

/***/ }),

/***/ 48282:
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/profilepage/profilepage.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilepageComponent": () => (/* binding */ ProfilepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 78539);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 47273);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 15215);








const _c0 = function () {
  return ["/home"];
};

const _c1 = function () {
  return ["/landing"];
};

const _c2 = function () {
  return ["/register"];
};

const _c3 = function () {
  return ["/profile"];
};

let ProfilepageComponent = /*#__PURE__*/(() => {
  class ProfilepageComponent {
    constructor() {
      this.isCollapsed = true;
    }

    ngOnInit() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("profile-page");
    }

    ngOnDestroy() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("profile-page");
    }

  }

  ProfilepageComponent.ɵfac = function ProfilepageComponent_Factory(t) {
    return new (t || ProfilepageComponent)();
  };

  ProfilepageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProfilepageComponent,
    selectors: [["app-profilepage"]],
    decls: 283,
    vars: 16,
    consts: [["color-on-scroll", "100", "id", "navbar-top", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], ["placement", "bottom", "tooltip", "Designed and Coded by Creative Tim", 1, "navbar-brand", 3, "routerLink"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "navbar-toggler", 3, "click"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "navbar-collapse", "justify-content-end", 3, "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "tim-icons", "icon-simple-remove"], [1, "navbar-nav"], [1, "nav-item", "p-0"], ["href", "https://twitter.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Twitter", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "d-lg-none", "d-xl-none"], ["href", "https://www.facebook.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Like us on Facebook", 1, "nav-link"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com/CreativeTimOfficial", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Instagram", 1, "nav-link"], [1, "fab", "fa-instagram"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["href", "https://github.com/creativetimofficial/blk-design-system-angular/issues", 1, "nav-link"], [1, "wrapper"], [1, "page-header"], ["src", "/static/assets/img/dots.png", 1, "dots"], ["src", "/static/assets/img/path4.png", 1, "path"], [1, "container", "align-items-center"], [1, "col-lg-6", "col-md-6"], [1, "profile-title", "text-left"], [1, "text-on-back"], [1, "profile-description"], [1, "btn-wrapper", "profile", "pt-3"], ["href", "https://twitter.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-twitter", "btn-round", "mr-1"], ["href", "https://www.facebook.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-facebook", "btn-round", "mr-1"], ["href", "https://dribbble.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-dribbble", "btn-round"], [1, "fab", "fa-dribbble"], [1, "col-lg-4", "col-md-6", "ml-auto", "mr-auto"], [1, "card", "card-coin", "card-plain"], [1, "card-header"], ["src", "/static/assets/img/mike.jpg", 1, "img-center", "img-fluid", "rounded-circle"], [1, "title"], [1, "card-body"], [1, "nav-tabs-danger", "justify-content-center", "tab-subcategories"], ["heading", "Wallet"], [1, "table-responsive"], ["id", "plain-table", 1, "table", "tablesorter"], [1, "text-danger"], [1, "header"], ["heading", "Send"], [1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], [1, "form-group"], ["placeholder", "e.g. 1Nasd92348hU984353hfid", "type", "text", 1, "form-control"], [1, "form-text"], ["placeholder", "1.587", "type", "text", 1, "form-control"], ["type", "submit", 1, "btn", "btn-simple", "btn-danger", "btn-icon", "btn-round", "float-right"], [1, "tim-icons", "icon-send"], ["heading", "News"], [1, "section"], [1, "row", "justify-content-between"], [1, "col-md-6"], [1, "row", "justify-content-between", "align-items-center"], [3, "showIndicators"], ["alt", "First slide", "src", "/static/assets/img/denys.jpg", 1, "d-block"], [1, "carousel-caption", "d-none", "d-md-block"], ["alt", "Second slide", "src", "/static/assets/img/fabien-bazanegue.jpg", 1, "d-block"], ["alt", "Third slide", "src", "/static/assets/img/mark-finn.jpg", 1, "d-block"], [1, "col-md-5"], [1, "profile-description", "text-left"], [1, "btn-wrapper", "pt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-simple", "btn-danger", "mr-1"], [1, "tim-icons", "icon-book-bookmark"], ["href", "javascript:void(0)", 1, "btn", "btn-simple", "btn-info"], [1, "tim-icons", "icon-bulb-63"], [1, "card", "card-plain"], ["type", "text", "value", "Mike", 1, "form-control"], ["placeholder", "mike@email.com", "type", "email", 1, "form-control"], ["type", "text", "value", "001-12321345", 1, "form-control"], ["type", "text", "value", "CreativeTim", 1, "form-control"], [1, "col-md-12"], ["placeholder", "Hello there!", "type", "text", 1, "form-control"], ["placement", "right", "type", "submit", 1, "btn", "btn-danger", "btn-round", "float-right"], [1, "col-md-4", "ml-auto"], [1, "info", "info-horizontal"], [1, "icon", "icon-danger"], [1, "tim-icons", "icon-square-pin"], [1, "description"], [1, "info-title"], [1, "tim-icons", "icon-mobile"], [1, "footer"], [1, "col-md-3"], [1, "nav"], ["href", "https://creative-tim.com/contact-us", 1, "nav-link"], ["href", "https://creative-tim.com/about-us", 1, "nav-link"], ["href", "https://creative-tim.com/blog", 1, "nav-link"], ["href", "https://opensource.org/licenses/MIT", 1, "nav-link"], [1, "btn-wrapper", "profile"], ["href", "https://twitter.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://www.facebook.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://dribbble.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple"]],
    template: function ProfilepageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " BLK\u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Design System Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfilepageComponent_Template_button_click_7_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 5)(9, "span", 6)(10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " BLK\u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfilepageComponent_Template_button_click_18_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ul", 15)(21, "li", 16)(22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li", 16)(27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li", 16)(32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "li", 24)(37, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Back to Kit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li", 24)(40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " Have an issue? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 27)(43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "img", 29)(45, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 31)(47, "div", 10)(48, "div", 32)(49, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Mike Scheinder");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 36)(56, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 41)(63, "div", 42)(64, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "h4", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 46)(69, "tabset", 47)(70, "tab", 48)(71, "div", 49)(72, "table", 50)(73, "thead", 51)(74, "tr")(75, "th", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "COIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "th", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "th", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "VALUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "tbody")(82, "tr")(83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "7.342");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "48,870.75 USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "tr")(90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "ETH");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "30.737");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "64,53.30 USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "tr")(97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "XRP");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "19.242");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "18,354.96 USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "tab", 53)(104, "div", 10)(105, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, " Pay to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 55)(108, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, " Please enter a valid address. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 10)(113, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, " Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 55)(116, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](119, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "tab", 62)(121, "div", 49)(122, "table", 50)(123, "thead", 51)(124, "tr")(125, "th", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Latest Crypto News");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "tbody")(128, "tr")(129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "The Daily: Nexo to Pay on Stable...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "tr")(132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Venezuela Begins Public of Nation...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "tr")(135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "PR: BitCanna \u00E2\u0080\u0093 Dutch Blockchain...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 63)(138, "div", 1)(139, "div", 64)(140, "div", 65)(141, "div", 66)(142, "carousel", 67)(143, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](144, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "div", 69)(146, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "Big City Life, United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](149, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "div", 69)(151, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "Somewhere Beyond, United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](154, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "div", 69)(156, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "Stocks, United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 72)(159, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, " An artist of considerable range, Ryan \u00E2\u0080\u0094 the name taken by Melbourne-raised, Brooklyn-based Nick Murphy \u00E2\u0080\u0094 writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "div", 74)(166, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](167, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, " Bookmark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](170, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, " Check it! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "section", 63)(173, "div", 1)(174, "div", 10)(175, "div", 65)(176, "div", 79)(177, "div", 43)(178, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "div", 46)(183, "form")(184, "div", 10)(185, "div", 65)(186, "div", 56)(187, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, " Your Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](189, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "div", 65)(191, "div", 56)(192, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, " Email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](194, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "div", 10)(196, "div", 65)(197, "div", 56)(198, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, " Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](200, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "div", 65)(202, "div", 56)(203, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, " Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](205, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "div", 10)(207, "div", 84)(208, "div", 56)(209, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, " Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](211, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](212, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](213, " Send text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "div", 87)(215, "div", 88)(216, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](217, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "div", 91)(219, "h4", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, "Find us at the office");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](222, " Bld Mihail Kogalniceanu, nr. 8, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](223, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](224, " 7652 Bucharest, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](225, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, " Romania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "div", 88)(228, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](229, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "div", 91)(231, "h4", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, "Give us a ring");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](234, " Michael Jordan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](235, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236, " +40 762 321 762 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](237, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, " Mon - Fri, 8:00-22:00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "footer", 94)(240, "div", 1)(241, "div", 10)(242, "div", 95)(243, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244, "BLK\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "div", 95)(246, "ul", 96)(247, "li", 24)(248, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](249, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](250, "li", 24)(251, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](252, " Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "li", 24)(254, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](255, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "li", 24)(257, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](258, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](259, "div", 95)(260, "ul", 96)(261, "li", 24)(262, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](263, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "li", 24)(265, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](266, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](267, "li", 24)(268, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](269, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](270, "li", 24)(271, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272, " License ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "div", 95)(274, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](275, "Follow us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "div", 101)(277, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](278, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](280, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](282, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showIndicators", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c3));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_0__.TooltipDirective, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__.CollapseDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__.TabsetComponent, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__.SlideComponent, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent],
    encapsulation: 2
  });
  return ProfilepageComponent;
})();

/***/ }),

/***/ 7536:
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/registerpage/registerpage.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterpageComponent": () => (/* binding */ RegisterpageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 78539);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 47273);







const _c0 = function () {
  return ["/home"];
};

const _c1 = function (a0) {
  return {
    "input-group-focus": a0
  };
};

const _c2 = function () {
  return ["/landing"];
};

const _c3 = function () {
  return ["/register"];
};

const _c4 = function () {
  return ["/profile"];
};

let RegisterpageComponent = /*#__PURE__*/(() => {
  class RegisterpageComponent {
    constructor() {
      this.isCollapsed = true;
    }

    onMouseMove(e) {
      var squares1 = document.getElementById("square1");
      var squares2 = document.getElementById("square2");
      var squares3 = document.getElementById("square3");
      var squares4 = document.getElementById("square4");
      var squares5 = document.getElementById("square5");
      var squares6 = document.getElementById("square6");
      var squares7 = document.getElementById("square7");
      var squares8 = document.getElementById("square8");
      var posX = e.clientX - window.innerWidth / 2;
      var posY = e.clientY - window.innerWidth / 6;
      squares1.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * -0.05 + "deg)";
      squares2.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * -0.05 + "deg)";
      squares3.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * -0.05 + "deg)";
      squares4.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * -0.05 + "deg)";
      squares5.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * -0.05 + "deg)";
      squares6.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * -0.05 + "deg)";
      squares7.style.transform = "perspective(500px) rotateY(" + posX * 0.02 + "deg) rotateX(" + posY * -0.02 + "deg)";
      squares8.style.transform = "perspective(500px) rotateY(" + posX * 0.02 + "deg) rotateX(" + posY * -0.02 + "deg)";
    }

    ngOnInit() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("register-page");
      this.onMouseMove(event);
    }

    ngOnDestroy() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("register-page");
    }

  }

  RegisterpageComponent.ɵfac = function RegisterpageComponent_Factory(t) {
    return new (t || RegisterpageComponent)();
  };

  RegisterpageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RegisterpageComponent,
    selectors: [["app-registerpage"]],
    hostBindings: function RegisterpageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousemove", function RegisterpageComponent_mousemove_HostBindingHandler($event) {
          return ctx.onMouseMove($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
      }
    },
    decls: 135,
    vars: 24,
    consts: [["color-on-scroll", "100", "id", "navbar-top", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], ["placement", "bottom", "tooltip", "Designed and Coded by Creative Tim", 1, "navbar-brand", 3, "routerLink"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "navbar-toggler", 3, "click"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "navbar-collapse", "justify-content-end", 3, "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "tim-icons", "icon-simple-remove"], [1, "navbar-nav"], [1, "nav-item", "p-0"], ["href", "https://twitter.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Twitter", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "d-lg-none", "d-xl-none"], ["href", "https://www.facebook.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Like us on Facebook", 1, "nav-link"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com/CreativeTimOfficial", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Instagram", 1, "nav-link"], [1, "fab", "fa-instagram"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["href", "https://github.com/creativetimofficial/blk-design-system-angular/issues", 1, "nav-link"], [1, "wrapper"], [1, "page-header"], [1, "page-header-image"], [1, "content"], [1, "col-lg-5", "col-md-6", "offset-lg-0", "offset-md-3"], ["id", "square7", 1, "square", "square-7"], ["id", "square8", 1, "square", "square-8"], [1, "card", "card-register"], [1, "card-header"], ["alt", "Card image", "src", "/static/assets/img/square1-red.png", 1, "card-img"], [1, "card-title"], [1, "card-body"], [1, "form"], [1, "input-group", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "tim-icons", "icon-single-02"], ["placeholder", "Full Name", "type", "text", 1, "form-control", 3, "focus", "blur"], [1, "tim-icons", "icon-email-85"], ["placeholder", "Email", "type", "text", 1, "form-control", 3, "focus", "blur"], [1, "tim-icons", "icon-lock-circle"], ["placeholder", "Password", "type", "text", 1, "form-control", 3, "focus", "blur"], [1, "form-check", "text-left"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input"], [1, "form-check-sign"], ["href", "javascript:void(0)"], [1, "card-footer"], ["href", "javascript:void(0)", 1, "btn", "btn-danger", "btn-round", "btn-lg"], [1, "register-bg"], ["id", "square1", 1, "square", "square-1"], ["id", "square2", 1, "square", "square-2"], ["id", "square3", 1, "square", "square-3"], ["id", "square4", 1, "square", "square-4"], ["id", "square5", 1, "square", "square-5"], ["id", "square6", 1, "square", "square-6"], [1, "footer"], [1, "col-md-3"], [1, "title"], [1, "nav"], ["href", "https://creative-tim.com/contact-us?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://creative-tim.com/about-us?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://creative-tim.com/blog?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://opensource.org/licenses/MIT", 1, "nav-link"], [1, "btn-wrapper", "profile"], ["href", "https://twitter.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://www.facebook.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://dribbble.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple"], [1, "fab", "fa-dribbble"]],
    template: function RegisterpageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " BLK\u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Design System Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterpageComponent_Template_button_click_7_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 5)(9, "span", 6)(10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " BLK\u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterpageComponent_Template_button_click_18_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ul", 15)(21, "li", 16)(22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 16)(27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li", 16)(32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li", 24)(37, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Back to Kit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li", 24)(40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Have an issue? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 27)(43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 30)(46, "div", 1)(47, "div", 10)(48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 32)(50, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 34)(52, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 38)(57, "form", 39)(58, "div", 40)(59, "div", 41)(60, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function RegisterpageComponent_Template_input_focus_62_listener() {
          return ctx.focus = true;
        })("blur", function RegisterpageComponent_Template_input_blur_62_listener() {
          return ctx.focus = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 40)(64, "div", 41)(65, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function RegisterpageComponent_Template_input_focus_67_listener() {
          return ctx.focus1 = true;
        })("blur", function RegisterpageComponent_Template_input_blur_67_listener() {
          return ctx.focus1 = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 40)(69, "div", 41)(70, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function RegisterpageComponent_Template_input_focus_72_listener() {
          return ctx.focus2 = true;
        })("blur", function RegisterpageComponent_Template_input_blur_72_listener() {
          return ctx.focus2 = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 49)(74, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 51)(76, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " I agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " terms and conditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 54)(82, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "div", 56)(85, "div", 57)(86, "div", 58)(87, "div", 59)(88, "div", 60)(89, "div", 61)(90, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "footer", 63)(92, "div", 1)(93, "div", 10)(94, "div", 64)(95, "h1", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "BLK\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 64)(98, "ul", 66)(99, "li", 24)(100, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "li", 24)(103, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "li", 24)(106, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "li", 24)(109, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 64)(112, "ul", 66)(113, "li", 24)(114, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "li", 24)(117, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "li", 24)(120, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "li", 24)(123, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, " License ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 64)(126, "h3", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Follow us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 71)(129, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c1, ctx.focus === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c1, ctx.focus1 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c1, ctx.focus2 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c4));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_0__.TooltipDirective, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__.CollapseDirective],
    encapsulation: 2
  });
  return RegisterpageComponent;
})();

/***/ }),

/***/ 73024:
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);



const _c0 = function () {
  return ["/"];
};

const _c1 = function () {
  return ["/home"];
};

const _c2 = function () {
  return ["/cipher"];
};

const _c3 = function () {
  return ["/attack"];
};

let FooterComponent = /*#__PURE__*/(() => {
  class FooterComponent {
    constructor() {}

  }

  FooterComponent.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };

  FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 31,
    vars: 8,
    consts: [[1, "wrapper"], [1, "footer"], [1, "container"], [1, "row"], [1, "col-md-3"], ["placement", "bottom", 1, "navbar-brand", 3, "routerLink"], [1, "title"], [1, "nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["href", "https://github.com/DavidFM43/colossus", 1, "nav-link"], ["href", "https://opensource.org/licenses/MIT", 1, "nav-link"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "footer", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2203nigma \u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "ul", 7)(10, "li", 8)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8)(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Encrypt & Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8)(18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Attack ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4)(21, "ul", 7)(22, "li", 8)(23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 8)(26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Contribute ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 8)(29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " License ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
    encapsulation: 2
  });
  return FooterComponent;
})();

/***/ }),

/***/ 18302:
/*!**************************************************************!*\
  !*** ./src/app/pages/gamma-cipher/gamma-cipher.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GammaCipherComponent": () => (/* binding */ GammaCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../top-bar/top-bar.component */ 82402);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 73024);
/* harmony import */ var _gamma_gamma_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gamma/gamma.component */ 77593);





let GammaCipherComponent = /*#__PURE__*/(() => {
  class GammaCipherComponent {
    constructor() {}

    ngOnInit() {}

  }

  GammaCipherComponent.ɵfac = function GammaCipherComponent_Factory(t) {
    return new (t || GammaCipherComponent)();
  };

  GammaCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GammaCipherComponent,
    selectors: [["app-gamma-cipher"]],
    decls: 10,
    vars: 0,
    consts: [[1, "col-md-10", "ml-auto", "col-xl-8", "mr-auto"], [1, "mb-3"], [1, "card"], [1, "card-header"], [1, "gammaTitle"], [1, "nav-tabs-danger", "justify-content-center"]],
    template: function GammaCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Gamma Pentagonal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "tabset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-gamma");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-footer");
      }
    },
    dependencies: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsetComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _gamma_gamma_component__WEBPACK_IMPORTED_MODULE_3__.GammaComponent],
    styles: [".gammaTitle[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-top: 120px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbW1hLWNpcGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFSiIsImZpbGUiOiJnYW1tYS1jaXBoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtbWFUaXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn0iXX0= */"]
  });
  return GammaCipherComponent;
})();

/***/ }),

/***/ 77593:
/*!************************************************!*\
  !*** ./src/app/pages/gamma/gamma.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GammaComponent": () => (/* binding */ GammaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Interfaces */ 26119);
/* harmony import */ var _shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/correct-key.directive */ 5975);
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mathjs */ 10889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);










function GammaComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function GammaComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function GammaComponent_div_24_ng_template_8_span_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function GammaComponent_div_24_ng_template_8_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GammaComponent_div_24_ng_template_8_span_0_span_2_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const elm_r8 = ctx.$implicit;
    const isLast_r9 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("[", elm_r8, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !isLast_r9);
  }
}

function GammaComponent_div_24_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GammaComponent_div_24_ng_template_8_span_0_Template, 3, 2, "span", 26);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.cipherText);
  }
}

function GammaComponent_div_24_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.decipherText, " ");
  }
}

function GammaComponent_div_24_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div")(2, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Percentage of cipher letters: ", ctx_r6.percentage, "%");
  }
}

function GammaComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div")(3, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 12)(6, "blockquote")(7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, GammaComponent_div_24_ng_template_8_Template, 1, 1, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, GammaComponent_div_24_ng_template_9_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, GammaComponent_div_24_div_11_Template, 4, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r2.resposeDymcMess, " text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.resposeDymcMess == "Cipher")("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.resposeDymcMess == "Cipher");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

const _c1 = function (a0) {
  return {
    plot: a0
  };
};

let GammaComponent = /*#__PURE__*/(() => {
  class GammaComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_1__.correctKey)([10], 0, 9), (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_1__.isPermutationNum)()]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required //Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$"),
        ]),
        x: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^-?[0-9]+$")]),
        y: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^-?[0-9]+$")])
      });
      this.cipherText = [];
      this.decipherText = "";
      this.percentage = null;
      this.submitted = false;
      this.resposeDymcMess = "";
    }

    ngOnInit() {}

    random() {
      let ranLen = 10;
      let arrBase = Array.from({
        length: ranLen
      }, (_, i) => i);
      let inx, aux;

      for (let i = 0; i < ranLen; i++) {
        inx = Math.floor(Math.random() * ranLen);
        aux = arrBase[inx];
        arrBase[inx] = arrBase[i];
        arrBase[i] = aux;
      }

      this.arguments.patchValue({
        key: arrBase.toString(),
        x: Math.floor(Math.random() * 29 - 20),
        y: Math.floor(Math.random() * 40 - 20)
      });
    }

    encrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      let keys = this.key.value.replaceAll(",", "");
      let x = parseInt(this.x.value);
      let y = parseInt(this.y.value);
      this.connection.gammaEncrypt(keys, x, y, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.percentage = (0,mathjs__WEBPACK_IMPORTED_MODULE_6__.round)(ans.percentage, 3);
          this.graph = JSON.parse(ans.grapgJSON);
          Plotly.purge("plot");
          Plotly.newPlot("plot", this.graph.data, this.graph.layout);
          console.log(JSON.parse(ans.grapgJSON));
          this.resposeDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      Plotly.purge("plot");
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      let keys = this.key.value.replaceAll(",", "");
      let x = parseInt(this.x.value);
      let y = parseInt(this.y.value);
      normalizedText = normalizedText.slice(1);
      normalizedText = normalizedText.slice(0, normalizedText.length - 1);
      let arr1 = normalizedText.split("],[");
      let arr = [];

      for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i].split(",").map(Number));
      }

      this.connection.gammaDecrypt(keys, x, y, arr).subscribe(ans => {
        if (!ans.error) {
          this.resposeDymcMess = "Decipher";
          this.decipherText = ans.decipherText;
        }

        this.submitted = true;
      });
    }

    get key() {
      return this.arguments.get("key");
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

    get x() {
      return this.arguments.get("x");
    }

    get y() {
      return this.arguments.get("y");
    }

    forceUpperCase() {
      this.arguments.patchValue({
        key: this.arguments.get("key").value.toUpperCase()
      });
    }

  }

  GammaComponent.ɵfac = function GammaComponent_Factory(t) {
    return new (t || GammaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_2__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_3__.NormalizerService));
  };

  GammaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GammaComponent,
    selectors: [["app-gamma"]],
    decls: 27,
    vars: 18,
    consts: [[3, "formGroup"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-lg-6", "ml-auto"], [3, "ngClass"], ["placeholder", "Key", "formControlName", "key", 1, "textkey", "form-control", 3, "ngClass"], ["placeholder", "X", "type", "text", "formControlName", "x", 1, "form-control"], [3, "ngIf"], ["placeholder", "Y", "type", "text", "formControlName", "y", 1, "form-control"], [1, "col-sm-3", "col-lg-3", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], ["id", "plot", 3, "ngClass"], [1, "input-group-append"], [1, "input-group-text"], [1, "tim-icons", "icon-lock-circle"], [1, "mb-3"], [1, "blockquote", "blockquote-danger"], [3, "ngIf", "ngIfElse"], ["elseCipherGamma", ""], ["class", "col-sm-12 col-lg-10 mr-auto ml-auto", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
    template: function GammaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, GammaComponent_ng_template_8_Template, 3, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, GammaComponent_ng_template_11_Template, 3, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GammaComponent_Template_button_click_13_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11)(16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14)(19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GammaComponent_Template_button_click_19_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 14)(22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GammaComponent_Template_button_click_22_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, GammaComponent_div_24_Template, 12, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.key.invalid && ctx.key.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, ctx.key.invalid && ctx.key.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.x.invalid && ctx.x.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.x.invalid || !ctx.x.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.y.invalid && ctx.y.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.y.invalid || !ctx.y.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c1, ctx.resposeDymcMess != "Cipher"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n\n.plot[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbW1hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDRTtFQUNFLFVBQUE7QUFFSjs7QUFBRTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0FBS0o7O0FBSEU7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7QUFNSjs7QUFKRTtFQUNFLGtCQUFBO0FBT0oiLCJmaWxlIjoiZ2FtbWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuZG9tLWJ0bi1jb250IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnJhbmRvbS1idG4ge1xuICAgIG1hcmdpbjogMCU7XG4gIH1cbiAgLnRleHJ0b2NyIHtcbiAgICBib3JkZXI6IDFlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjQyODVyZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWluLWhlaWdodDogMTByZW07XG4gIH1cbiAgLnRleHRrZXkge1xuICAgIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDNyZW07XG4gIH1cbiAgLnN1Ym1pdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wbGFpblRleHRFcnJvciB7XG4gICAgYm9yZGVyOiAwLjA5cmVtIHNvbGlkICNmMzM2MjAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2VjMjUwZDtcbiAgfVxuICAucGxvdHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH0iXX0= */"]
  });
  return GammaComponent;
})();

/***/ }),

/***/ 48816:
/*!************************************************************!*\
  !*** ./src/app/pages/hill-cipher/hill-cipher.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HillCipherComponent": () => (/* binding */ HillCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/correct-key.directive */ 5975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);









function HillCipherComponent_ng_container_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Image name can not have points(.). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function HillCipherComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HillCipherComponent_ng_container_16_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.addFileGroup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HillCipherComponent_ng_container_16_div_5_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.notAdmit);
  }
}

function HillCipherComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HillCipherComponent_ng_template_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.removeFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function HillCipherComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.progress, " ");
  }
}

function HillCipherComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ups, intente otra vez.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function HillCipherComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div")(3, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.responseDymcMess, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r5.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let HillCipherComponent = /*#__PURE__*/(() => {
  class HillCipherComponent {
    constructor(connection, domS) {
      this.connection = connection;
      this.domS = domS;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.correctKey)([4, 9, 16], 0, 255), (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.correctKeyHill)()])
      });
      this.file = null;
      this.fileUrl = null;
      this.notAdmit = false;
      this.sending = false;
      this.errorUpload = false;
      this.progress = "";
      this.encrypted = false;
      this.responseDymcMess = "";
    }

    ngOnInit() {}

    random() {
      let keyLen = Math.floor(Math.random() * 2 + 2);
      let arrBase = Array.from({
        length: keyLen * keyLen
      }, () => 0);
      let invMaxDigVal = Array.from({
        length: keyLen
      }, () => 2 * Math.floor(Math.random() * 127) + 1);

      for (let i = 0; i < keyLen; i++) {
        for (let j = 0; j < keyLen; j++) {
          if (i == j) {
            arrBase[i * keyLen + j] = invMaxDigVal[i];
          }

          if (j > i) {
            arrBase[i * keyLen + j] = Math.floor(Math.random() * 255);
          }
        }
      }

      this.arguments.patchValue({
        key: arrBase.toString()
      });
    }

    submit() {}

    addFileGroup(event) {
      /*
       * Adds image file from selection, only admits valid image file types
       */
      let auxType;
      this.encrypted = false;
      auxType = event.target.files[0].name.substring(event.target.files[0].name.indexOf(".")).toLowerCase();

      if (auxType === ".png" || auxType === ".jpeg" || auxType === ".jpg") {
        this.file = event.target.files[0];
        this.fileUrl = this.domS.bypassSecurityTrustResourceUrl(URL.createObjectURL(event.target.files[0]));
        this.notAdmit = false;
      } else {
        this.notAdmit = true;
      }
    }

    removeFile() {
      this.encrypted = false;
      this.file = null;
      this.notAdmit = false;
    }

    encrypt() {
      /*
       * Encrypts an image. Sends formData with the plain image and matrix key to
       * the server API.
       */
      const formData = new FormData();
      formData.append("file", this.file, "img" + this.file.name.substring(this.file.name.indexOf(".")).toLowerCase());
      formData.append("key", this.key.value);
      this.sending = true;
      this.connection.hillEncrypt(formData).subscribe(events => {
        // sending
        if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.UploadProgress) {
          const auxProgress = Math.round(events.loaded / events.total * 100);

          if (auxProgress === 100) {
            this.progress = "Encrypting";
          } else {
            this.progress = "Uploading: " + auxProgress.toString() + "%";
          } // response

        } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response) {
          // Can't properly handle errors with blob response type, so this if
          // statement does nothing
          if (events.body["error"]) {
            this.errorUpload = true;
            this.encrypted = false;
          } else {
            this.createImageFromBlob(events.body);
            this.encrypted = true;
            this.responseDymcMess = "Encrypted";
          }

          this.sending = false;
        }
      });
    }

    decrypt() {
      /*
       * Decrypts an image. Sends formData with the plain image and matrix key to
       * the server API.
       */
      const formData = new FormData();
      formData.append("file", this.file, "img" + this.file.name.substring(this.file.name.indexOf(".")).toLowerCase());
      formData.append("key", this.key.value);
      this.sending = true;
      this.connection.hillDecrypt(formData).subscribe(events => {
        // sending
        if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.UploadProgress) {
          const auxProgress = Math.round(events.loaded / events.total * 100);

          if (auxProgress === 100) {
            this.progress = "Decypting";
          } else {
            this.progress = "Uploading: " + auxProgress.toString() + "%";
          } // response

        } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response) {
          // Can't properly handle errors with blob response type, so this if
          // statement does nothing
          if (events.body["error"]) {
            this.errorUpload = true;
            this.encrypted = false;
          } else {
            this.createImageFromBlob(events.body);
            this.encrypted = true;
            this.responseDymcMess = "Decrypted";
          }

          this.sending = false;
        }
      });
    }

    createImageFromBlob(image) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      }
    }

    get key() {
      return this.arguments.get("key");
    }

  }

  HillCipherComponent.ɵfac = function HillCipherComponent_Factory(t) {
    return new (t || HillCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer));
  };

  HillCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HillCipherComponent,
    selectors: [["app-hill-cipher"]],
    decls: 30,
    vars: 12,
    consts: [[3, "formGroup", "ngSubmit"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-lg-6", "ml-auto"], [3, "ngClass"], ["placeholder", "Key", "formControlName", "key", 1, "textkey", "form-control", 3, "ngClass"], [1, "col-sm-3", "col-lg-3", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], [1, "title"], [1, "mb-3"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto", 2, "text-align", "center"], [2, "text-align", "center", "margin-top", "10px"], [4, "ngIf", "ngIfElse"], ["elseUploadrer", ""], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [2, "margin-top", "10px"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["for", "file-upload-adder"], [1, "addResourcesS"], [1, "far", "fa-plus-square"], ["id", "file-upload-adder", "accept", ".pdf,image/png,image/jpeg,image/jpg", "type", "file", 2, "display", "none", 3, "change"], ["class", "alertForm", 4, "ngIf"], [1, "alertForm"], ["id", "file", 3, "src"], ["type", "button", 1, "btn", "btn-primary", "btn-icon", "btn-round", "mr-1", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "img-fluid", "rounded", "shadow", 3, "src"]],
    template: function HillCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HillCipherComponent_Template_form_ngSubmit_0_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HillCipherComponent_Template_button_click_7_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Select image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12)(15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HillCipherComponent_ng_container_16_Template, 6, 1, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HillCipherComponent_ng_template_17_Template, 3, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8)(20, "div", 16)(21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HillCipherComponent_Template_button_click_21_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16)(24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HillCipherComponent_Template_button_click_24_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, HillCipherComponent_div_27_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, HillCipherComponent_div_28_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, HillCipherComponent_div_29_Template, 7, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.key.invalid && ctx.key.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.key.invalid && ctx.key.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.file == null)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.file == null || ctx.arguments.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.file == null || ctx.arguments.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sending);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.encrypted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.addResourcesS[_ngcontent-%COMP%] {\n  font-size: 38px;\n  color: #454880;\n  border: 2px dashed #454880;\n  border-radius: 10px;\n  display: inline-block;\n  padding: 2rem 5rem;\n}\n\n#file[_ngcontent-%COMP%] {\n  max-width: 300px;\n  height: auto;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: #171941;\n}\n\n.random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpbGwtY2lwaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUtGOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7QUFNRjs7QUFKQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU9GOztBQUxBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7QUFVRiIsImZpbGUiOiJoaWxsLWNpcGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYW5kb20tYnRuLWNvbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmFuZG9tLWJ0biB7XG4gIG1hcmdpbjogMCU7XG59XG4udGV4cnRvY3Ige1xuICBib3JkZXI6IDFlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxOTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xuICBib3JkZXItcmFkaXVzOiAwLjQyODVyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xufVxuLnRleHRrZXkge1xuICBib3JkZXI6IDFlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxOTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xuICBib3JkZXItcmFkaXVzOiAwLjQyODVyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDNyZW07XG59XG4uYWRkUmVzb3VyY2VzUyB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgY29sb3I6ICM0NTQ4ODA7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjNDU0ODgwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJyZW0gNXJlbTtcbn1cblxuI2ZpbGUge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbn1cblxuLnJhbmRvbS1idG4tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYW5kb20tYnRuIHtcbiAgbWFyZ2luOiAwJTtcbn1cbi50ZXhydG9jciB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG59XG4udGV4dGtleSB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LWhlaWdodDogM3JlbTtcbn1cbi5zdWJtaXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxhaW5UZXh0RXJyb3Ige1xuICBib3JkZXI6IDAuMDlyZW0gc29saWQgI2YzMzYyMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VjMjUwZDtcbn1cbiJdfQ== */"]
  });
  return HillCipherComponent;
})();

/***/ }),

/***/ 67479:
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ 13703);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 15896);
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ 9115);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 78539);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/popover */ 22367);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 47273);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ 34307);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 83401);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/alert */ 38147);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 38495);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 15215);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ 26528);


















const _c0 = function () {
  return ["/register"];
};

const _c1 = function () {
  return ["/landing"];
};

const _c2 = function () {
  return ["/profile"];
};

function IndexComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 361)(1, "a", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Documentation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Register Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "a", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " Landing Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "a", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, " Profile Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](5, _c2));
  }
}

function IndexComponent_div_245_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 367)(1, "a", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " Another action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "a", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Something else here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function IndexComponent_div_268_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 369)(1, "a", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Dropdown header ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "a", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Another action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "a", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Something else here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "div", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "a", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, " Separated link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "div", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "a", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, " One more separated link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function IndexComponent_ng_template_419_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Profile ");
  }
}

function IndexComponent_ng_template_426_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Settings ");
  }
}

function IndexComponent_ng_template_433_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Options ");
  }
}

function IndexComponent_ng_template_482_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Home ");
  }
}

function IndexComponent_ng_template_484_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Messages ");
  }
}

function IndexComponent_ng_template_486_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Settings ");
  }
}

const _c3 = function () {
  return ["/home"];
};

const _c4 = function (a0) {
  return {
    "input-group-focus": a0
  };
};

const _c5 = function () {
  return {
    isAnimated: true,
    containerClass: "theme-red"
  };
};

let IndexComponent = /*#__PURE__*/(() => {
  class IndexComponent {
    constructor() {
      this.isCollapsed = true;
      this.date = new Date();
      this.pagination = 3;
      this.pagination1 = 1;
    }

    scrollToDownload(element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }

    ngOnInit() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("index-page");
      var slider = document.getElementById("sliderRegular");
      nouislider__WEBPACK_IMPORTED_MODULE_0___default().create(slider, {
        start: 40,
        connect: false,
        range: {
          min: 0,
          max: 100
        }
      });
      var slider2 = document.getElementById("sliderDouble");
      nouislider__WEBPACK_IMPORTED_MODULE_0___default().create(slider2, {
        start: [20, 60],
        connect: true,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    ngOnDestroy() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("index-page");
    }

  }

  IndexComponent.ɵfac = function IndexComponent_Factory(t) {
    return new (t || IndexComponent)();
  };

  IndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: IndexComponent,
    selectors: [["app-index"]],
    decls: 979,
    vars: 83,
    consts: [["color-on-scroll", "100", "id", "navbar-top", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], ["placement", "bottom", "target", "_blank", "tooltip", "Designed and Coded by Creative Tim", 1, "navbar-brand", 3, "routerLink"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "navbar-toggler", 3, "click"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "navbar-collapse", "justify-content-end", 3, "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "tim-icons", "icon-simple-remove"], [1, "navbar-nav"], [1, "nav-item", "p-0"], ["href", "https://twitter.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Twitter", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "d-lg-none", "d-xl-none"], ["href", "https://www.facebook.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Like us on Facebook", 1, "nav-link"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com/CreativeTimOfficial", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Instagram", 1, "nav-link"], [1, "fab", "fa-instagram"], ["dropdown", "", 1, "dropdown", "nav-item"], ["data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:void(0)", 1, "dropdown-toggle", "nav-link", "dropdown-toggle"], [1, "fa", "fa-cogs", "d-lg-none", "d-xl-none"], ["class", "dropdown-menu dropdown-with-icons", 4, "dropdownMenu"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link", "btn", "btn-default", "d-none", "d-lg-block", 3, "click"], [1, "tim-icons", "icon-cloud-download-93"], [1, "wrapper"], [1, "page-header", "header-filter"], [1, "squares", "square1"], [1, "squares", "square2"], [1, "squares", "square3"], [1, "squares", "square4"], [1, "squares", "square5"], [1, "squares", "square6"], [1, "squares", "square7"], [1, "content-center", "brand"], [1, "h1-seo"], [1, "main"], ["id", "basic-elements", 1, "section", "section-basic"], ["src", "/static/assets/img/path1.png", 1, "path"], [1, "title"], [1, "category"], [1, "col-md-10"], ["type", "button", 1, "btn", "btn-primary", "mr-1"], ["type", "button", 1, "btn", "btn-primary", "btn-round", "mr-1"], [1, "tim-icons", "icon-heart-2"], ["type", "button", 1, "btn", "btn-primary", "btn-icon", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-primary", "btn-simple", "btn-round"], [1, "btn", "btn-primary", "btn-sm", "mr-1"], [1, "btn", "btn-primary", "mr-1"], [1, "btn", "btn-primary", "btn-lg"], [1, "col-md-12"], [1, "btn", "mr-1"], [1, "btn", "btn-info", "mr-1"], [1, "btn", "btn-success", "mr-1"], [1, "btn", "btn-warning", "mr-1"], [1, "btn", "btn-danger", "mr-1"], [1, "btn", "btn-neutral"], [1, "col-md-8"], [1, "btn", "btn-link", "mr-1"], [1, "btn", "btn-link", "btn-primary", "mr-1"], [1, "btn", "btn-link", "btn-info", "mr-1"], [1, "btn", "btn-link", "btn-success", "mr-1"], [1, "btn", "btn-link", "btn-warning", "mr-1"], [1, "btn", "btn-link", "btn-danger"], [1, "space-70"], ["id", "inputs"], [1, "col-sm-6", "col-lg-3"], [1, "form-group"], ["placeholder", "Regular", "type", "text", "value", "", 1, "form-control"], [1, "form-group", "has-success"], ["type", "text", "value", "Success", 1, "form-control", "form-control-success"], [1, "form-group", "has-danger"], ["type", "email", "value", "Error Input", 1, "form-control", "form-control-danger"], [1, "input-group", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["placeholder", "Left Font Awesome Icon", "type", "text", 1, "form-control", 3, "focus", "blur"], [1, "input-group"], ["placeholder", "Right Nucleo Icon", "type", "text", 1, "form-control"], [1, "input-group-append"], [1, "tim-icons", "icon-lock-circle"], ["id", "checkRadios", 1, "row"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input"], [1, "form-check-sign"], ["checked", "checked", "type", "checkbox", 1, "form-check-input"], [1, "form-check", "disabled"], ["disabled", "disabled", "type", "checkbox", 1, "form-check-input"], ["checked", "checked", "disabled", "disabled", "type", "checkbox", 1, "form-check-input"], [1, "form-check", "form-check-radio"], ["id", "exampleRadios1", "name", "exampleRadios", "type", "radio", "value", "option1", 1, "form-check-input"], ["checked", "checked", "id", "exampleRadios1", "name", "exampleRadios", "type", "radio", "value", "option2", 1, "form-check-input"], [1, "form-check", "form-check-radio", "disabled"], ["disabled", "disabled", "id", "exampleRadios2", "name", "exampleRadios1", "type", "radio", "value", "option3", 1, "form-check-input"], ["checked", "checked", "disabled", "disabled", "id", "exampleRadios2", "name", "exampleRadios1", "type", "radio", "value", "option4", 1, "form-check-input"], [3, "switch-on-color", "switch-off-color", "switch-off-text", "switch-on-text"], [3, "switch-on-color", "switch-off-color"], ["id", "sliderRegular", 1, "slider"], ["id", "sliderDouble", 1, "slider", "slider-danger"], [1, "section", "section-navbars"], ["src", "/static/assets/img/path3.png", 1, "path"], ["id", "menu-dropdown", 1, "container"], [1, "col-md-6"], [1, "navbar", "navbar-expand-lg", "bg-primary"], ["href", "javascript:void(0)", 1, "navbar-brand"], ["aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", "id", "example-navbar", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "example-navbar", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "nav-item", "active"], ["href", "javascript:void(0)", 1, "nav-link"], ["dropdown", "", 1, "nav-item", "dropdown"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:void(0)", "id", "navbarDropdownMenuLink", 1, "nav-link", "dropdown-toggle", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", "class", "dropdown-menu", 4, "dropdownMenu"], [1, "navbar", "navbar-expand-lg", "bg-info"], ["aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", "id", "example-navbar-icons", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "example-navbar-icons", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "navbar-nav", "ml-auto"], ["aria-hidden", "true", 1, "tim-icons", "icon-send"], ["aria-hidden", "true", 1, "tim-icons", "icon-single-02"], ["data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:void(0)", "id", "navbarDropdownMenuLink", 1, "nav-link", "dropdown-toggle", "dropdown-toggle"], ["aria-hidden", "true", 1, "tim-icons", "icon-settings-gear-63"], ["aria-labelledby", "navbarDropdownMenuLink", "class", "dropdown-menu dropdown-menu-right", 4, "dropdownMenu"], [1, "title", "mb-3"], ["id", "navbar"], [1, "navigation-example"], ["aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", "id", "example-navbar-primary", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "example-navbar-primary", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "tim-icons", "icon-world"], [1, "tim-icons", "icon-single-02"], [1, "tim-icons", "icon-settings-gear-63"], ["aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", "id", "example-navbar-info", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "example-navbar-info", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "navbar", "navbar-expand-lg", "bg-success"], ["aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", "id", "example-navbar-success", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "example-navbar-success", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "navbar", "navbar-expand-lg", "bg-warning"], ["aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", "id", "example-navbar-warning", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "example-navbar-warning", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "fab", "fa-google-plus"], [1, "navbar", "navbar-expand-lg", "bg-danger"], ["aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", "id", "example-navbar-danger", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "example-navbar-danger", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "fab", "fa-pinterest"], [1, "navbar", "navbar-expand-lg", "navbar-transparent"], ["aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", "id", "example-navbar-transparent", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "example-navbar-transparent", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "section", "section-tabs"], [1, "mb-3"], [1, "col-md-10", "ml-auto", "col-xl-6", "mr-auto"], [1, "text-uppercase", "font-weight-bold"], [1, "card"], [1, "card-header"], [1, "nav-tabs-danger"], ["tabHeading", ""], ["heading", "Profile"], ["heading", "Settings"], ["heading", "Options"], [1, "section", "section-pagination"], ["src", "/static/assets/img/path4.png", 1, "path"], ["src", "/static/assets/img/path5.png", 1, "path", "path1"], [1, "mb-4"], [1, "progress-container"], [1, "progress-badge"], [3, "value"], [1, "progress-value"], [1, "progress-container", "progress-danger"], [1, "progress-bar-danger", 3, "value"], [1, "mb-5"], ["type", "pills", 1, "nav-pills-danger", "nav-pills-icons"], [1, "pagination-danger", 3, "ngModel", "totalItems", "ngModelChange"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 1, "pagination-danger", 3, "boundaryLinks", "totalItems", "ngModel"], [1, "badge", "badge-default", "mr-1"], [1, "badge", "badge-primary", "mr-1"], [1, "badge", "badge-success", "mr-1"], [1, "badge", "badge-info", "mr-1"], [1, "badge", "badge-warning", "mr-1"], [1, "badge", "badge-danger", "mr-1"], [1, "badge", "badge-neutral"], ["id", "notifications", 1, "section", "section-notifications"], [1, "space"], [1, "alert-with-icon", 3, "type", "dismissible"], ["data-notify", "icon", 1, "tim-icons", "icon-coins"], ["data-notify", "icon", 1, "tim-icons", "icon-trophy"], ["data-notify", "icon", 1, "tim-icons", "icon-bell-55"], ["data-notify", "icon", 1, "tim-icons", "icon-bulb-63"], ["data-notify", "icon", 1, "tim-icons", "icon-support-17"], [1, "section", "section-typo"], ["src", "/static/assets/img/path3.png", 1, "path", "path1"], ["id", "typography"], [1, "typography-line"], [1, "blockquote", "blockquote-danger"], [1, "text-muted"], [1, "text-primary"], [1, "text-info"], [1, "text-success"], [1, "text-warning"], [1, "text-danger"], [1, "space-50"], ["id", "images"], [1, "col-sm-3", "col-6"], [1, "d-block", "text-uppercase", "font-weight-bold", "mb-4"], ["alt", "Rounded image", "src", "/static/assets/img/ryan.jpg", 1, "img-fluid", "rounded", "shadow", 2, "width", "150px"], ["alt", "Circle image", "src", "/static/assets/img/james.jpg", 1, "img-fluid", "rounded-circle", "shadow", 2, "width", "150px"], [1, "col-sm-3", "col-6", "mt-5", "mt-sm-0"], ["alt", "Raised image", "src", "/static/assets/img/lora.jpg", 1, "img-fluid", "rounded", "shadow-lg", 2, "width", "150px"], ["alt", "Raised circle image", "src", "/static/assets/img/mike.jpg", 1, "img-fluid", "rounded-circle", "shadow-lg", 2, "width", "150px"], ["id", "javascriptComponents", 1, "section", "section-javascript"], ["src", "/static/assets/img/path5.png", 1, "path"], [1, "title", "mb-5"], ["id", "modals", 1, "row"], [1, "col-md-4"], ["data-target", "#myModal", 1, "btn", "btn-danger", 3, "click"], ["data-target", "#myModal1", 1, "btn", "btn-warning", 3, "click"], ["data-target", "#myModal2", 1, "btn", "btn-success", 3, "click"], [1, "mb-5", "mt-3"], [1, "datepicker-container"], ["bsDatepicker", "", "data-datepicker-color", "danger", "id", "datepicker", "type", "text", 1, "form-control", 3, "bsConfig", "bsValue"], ["container", "body", "placement", "top", "popoverTitle", "Popover on top", "popover", "Here will be some very useful information about his popover.", "type", "button", 1, "btn", "btn-default", "btn-sm", "mr-1"], ["container", "body", "placement", "right", "popoverTitle", "Popover on right", "popover", "Here will be some very useful information about his popover.<br>\n              Here will be some very useful information about his popover.", "type", "button", 1, "btn", "btn-default", "btn-sm", "mr-1"], ["container", "body", "placement", "bottom", "popoverTitle", "Popover on bottom", "popover", "Here will be some very useful information about his popover.", "type", "button", 1, "btn", "btn-default", "btn-sm", "mr-1"], ["container", "body", "placement", "left", "popoverTitle", "Popover on left", "popover", "Here will be some very useful information about his popover.", "type", "button", 1, "btn", "btn-default", "btn-sm"], ["data-animation", "true", "data-container", "body", "data-delay", "100", "placement", "left", "tooltip", "Tooltip on left", "type", "button", 1, "btn", "btn-default", "btn-tooltip", "btn-sm", "mr-1"], ["data-animation", "true", "data-container", "body", "placement", "top", "tooltip", "Tooltip on top", "type", "button", 1, "btn", "btn-default", "btn-tooltip", "btn-sm", "mr-1"], ["data-animation", "true", "data-container", "body", "placement", "bottom", "tooltip", "Tooltip on bottom", "type", "button", 1, "btn", "btn-default", "btn-tooltip", "btn-sm", "mr-1"], ["data-animation", "true", "data-container", "body", "placement", "right", "tooltip", "Tooltip on right", "type", "button", 1, "btn", "btn-default", "btn-tooltip", "btn-sm"], [1, "clearfix"], [1, "section"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-lg-5", "mb-5", "mb-lg-0"], [1, "text-white", "font-weight-light"], [1, "text-white", "mt-4"], ["href", "https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts", 1, "btn", "btn-warning", "mt-4"], [1, "col-lg-6"], [3, "showIndicators"], ["alt", "First slide", "src", "/static/assets/img/denys.jpg", 1, "d-block", "w-100"], ["alt", "Second slide", "src", "/static/assets/img/fabien-bazanegue.jpg", 1, "d-block", "w-100"], ["alt", "Third slide", "src", "/static/assets/img/mark-finn.jpg", 1, "d-block", "w-100"], [1, "section", "section-nucleo-icons"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-12"], [1, "description"], [1, "btn-wrapper"], ["href", "https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons", "target", "_blank", 1, "btn", "btn-danger", "btn-round", "mr-1"], ["href", "https://nucleoapp.com/?ref=1712", "target", "_blank", 1, "btn", "btn-danger", "btn-simple", "btn-round", "btn-lg"], [1, "blur-hover"], ["href", "https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons", 1, "text-danger"], [1, "icons-container", "blur-item", "on-screen", "mt-5"], [1, "icon", "tim-icons", "icon-coins"], [1, "icon", "icon-sm", "tim-icons", "icon-spaceship"], [1, "icon", "icon-sm", "tim-icons", "icon-money-coins"], [1, "icon", "icon-sm", "tim-icons", "icon-link-72"], [1, "icon", "tim-icons", "icon-send"], [1, "icon", "tim-icons", "icon-mobile"], [1, "icon", "tim-icons", "icon-wifi"], [1, "icon", "icon-sm", "tim-icons", "icon-key-25"], [1, "icon", "icon-sm", "tim-icons", "icon-atom"], [1, "icon", "icon-sm", "tim-icons", "icon-satisfied"], [1, "icon", "tim-icons", "icon-gift-2"], [1, "icon", "tim-icons", "icon-tap-02"], [1, "icon", "tim-icons", "icon-wallet-43"], [1, "blur-hidden", "h5", "text-danger"], [1, "section", "section-signup"], [1, "squares", "square-1"], [1, "squares", "square-2"], [1, "squares", "square-3"], [1, "squares", "square-4"], [1, "row", "row-grid", "justify-content-between", "align-items-center"], [1, "display-3", "text-white"], [1, "text-white"], [1, "text-white", "mb-3"], [1, "btn", "btn-danger", 3, "routerLink"], [1, "col-lg-6", "mb-lg-auto"], [1, "card", "card-register"], ["alt", "Card image", "src", "/static/assets/img/square1-red.png", 1, "card-img"], [1, "card-title"], [1, "card-body"], [1, "form"], ["placeholder", "Full Name", "type", "text", 1, "form-control"], [1, "tim-icons", "icon-email-85"], ["placeholder", "Email", "type", "text", 1, "form-control"], ["placeholder", "Password", "type", "text", 1, "form-control"], [1, "form-check", "text-left"], ["href", "javascript:void(0)"], [1, "card-footer"], ["href", "javascript:void(0)", 1, "btn", "btn-danger", "btn-round", "btn-lg"], ["data-background-color", "black", 1, "section", "section-examples"], [1, "container", "text-center"], [1, "col-sm-6"], [3, "routerLink"], ["alt", "Image", "src", "/static/assets/img/landing-page.png", 1, "img-raised"], [1, "btn", "btn-simple", "btn-danger", "btn-round", 3, "routerLink"], ["alt", "Image", "src", "/static/assets/img/profile-page.png", 1, "img-raised"], ["data-background-color", "black", 1, "section", "section-download"], ["target", ""], [1, "row", "justify-content-md-center"], [1, "text-center", "col-md-12", "col-lg-8"], ["href", "https://www.creative-tim.com/product/blk-design-system-angular", "role", "button", 1, "btn", "btn-danger", "btn-round", "btn-lg"], [1, "row", "row-grid", "align-items-center", "my-md"], [1, "text-danger", "font-weight-light", "mb-2"], [1, "mb-0", "font-weight-light"], [1, "col-lg-6", "text-lg-center", "btn-wrapper"], ["id", "twitter", 1, "btn", "btn-icon", "btn-twitter", "btn-round", "btn-lg", "mr-1"], ["id", "facebook", 1, "btn", "btn-icon", "btn-facebook", "btn-round", "btn-lg", "mr-1"], ["href", "https://github.com/creativetimofficial", "target", "_blank", 1, "btn", "btn-icon", "btn-github", "btn-round", "btn-lg"], [1, "fab", "fa-github"], ["aria-hidden", "true", "aria-labelledby", "myModalLabel", "bsModal", "", "id", "myModal", "role", "dialog", "tabindex", "-1", 1, "modal", "fade"], ["myModal", "bs-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "justify-content-center"], ["aria-hidden", "true", "data-dismiss", "modal", "type", "button", 1, "close", 3, "click"], [1, "title", "title-up"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-danger", 3, "click"], ["aria-hidden", "true", "aria-labelledby", "myModalLabel", "bsModal", "", "id", "myModal1", "role", "dialog", "tabindex", "-1", 1, "modal", "fade", "modal-mini", "modal-danger", "modal-mini"], ["myModal1", "bs-modal"], [1, "tim-icons", "icon-simple-remove", "text-white"], [1, "modal-profile"], ["type", "button", 1, "btn", "btn-link", "btn-neutral"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-link", "btn-neutral", 3, "click"], ["aria-hidden", "true", "aria-labelledby", "myModalLabel", "bsModal", "", "id", "myModal2", "role", "dialog", "tabindex", "-1", 1, "modal", "fade", "modal-black"], ["myModal2", "bs-modal"], [1, "text-muted", "text-center", "ml-auto", "mr-auto"], [1, "mb-0"], [1, "btn-wrapper", "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-neutral", "btn-icon", "mr-1"], ["src", "/static/assets/img/github.svg"], ["href", "javascript:void(0)", 1, "btn", "btn-neutral", "btn-icon"], ["src", "/static/assets/img/google.svg"], [1, "text-center", "text-muted", "mb-4", "mt-3"], ["role", "form"], [1, "form-group", "mb-3"], [1, "input-group", "input-group-alternative", 3, "ngClass"], ["placeholder", "Email", "type", "email", 1, "form-control", 3, "focus", "blur"], [1, "tim-icons", "icon-key-25"], ["placeholder", "Password", "type", "password", 1, "form-control", 3, "focus", "blur"], [1, "form-check", "mt-3"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", "my-4"], [1, "footer"], [1, "col-md-3"], [1, "nav"], [1, "nav-link", 3, "routerLink"], ["href", "https://creative-tim.com/contact-us?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://creative-tim.com/about-us?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://creative-tim.com/blog?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://opensource.org/licenses/MIT", 1, "nav-link"], [1, "btn-wrapper", "profile"], ["href", "https://twitter.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://www.facebook.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://dribbble.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple"], [1, "fab", "fa-dribbble"], [1, "dropdown-menu", "dropdown-with-icons"], ["href", "https://demos.creative-tim.com/blk-design-system-angular/#/documentation/overview", 1, "dropdown-item"], [1, "tim-icons", "icon-paper"], [1, "dropdown-item", 3, "routerLink"], [1, "tim-icons", "icon-bullet-list-67"], [1, "tim-icons", "icon-image-02"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], ["href", "javascript:void(0)", 1, "dropdown-item"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-header"], [1, "divider"], [1, "tim-icons", "icon-spaceship"], [1, "tim-icons", "icon-bag-16"], [1, "tim-icons", "icon-atom"], [1, "tim-icons", "icon-chat-33"]],
    template: function IndexComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " BLK\u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Design System Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_7_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 5)(9, "span", 6)(10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, " BLK\u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_18_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "ul", 15)(21, "li", 16)(22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "li", 16)(27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "li", 16)(32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](33, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "li", 24)(37, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, " Getting started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, IndexComponent_div_40_Template, 13, 6, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "li", 28)(42, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);

          const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](831);

          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.scrollToDownload(_r9));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 31)(46, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](47, "div", 33)(48, "div", 34)(49, "div", 35)(50, "div", 36)(51, "div", 37)(52, "div", 38)(53, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 1)(55, "div", 40)(56, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, "BLK\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, " A beautiful Design System for Bootstrap 4 and Angular. It's Free and Open Source. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div", 42)(61, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](62, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 1)(64, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "Basic Elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](69, "Pick your style");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "div", 10)(71, "div", 47)(72, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, " Round ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](77, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78, " With Icon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](80, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82, " Simple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, "Pick your size");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "div", 10)(86, "div", 47)(87, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](88, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](90, "Regular");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](91, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94, "Pick your color");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](95, "div", 10)(96, "div", 56)(97, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](98, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](99, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](100, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](101, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](104, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](107, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](108, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](110, "Neutral");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](112, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](113, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](114, "div", 10)(115, "div", 63)(116, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](117, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](118, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](119, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](120, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](121, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](122, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](123, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](124, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](125, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](127, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](128, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "div", 71)(130, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](131, "Inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](132, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](133, "Form Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](134, "div", 10)(135, "div", 72)(136, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](137, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](138, "div", 72)(139, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](140, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](141, "div", 72)(142, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](143, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](144, "div", 72)(145, "div", 79)(146, "div", 80)(147, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](148, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](149, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function IndexComponent_Template_input_focus_149_listener() {
          return ctx.focus = true;
        })("blur", function IndexComponent_Template_input_blur_149_listener() {
          return ctx.focus = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](150, "div", 72)(151, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](152, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](153, "div", 86)(154, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](155, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](156, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](157, "div", 88)(158, "div", 72)(159, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](160, "Checkboxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](161, "div", 89)(162, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](163, "input", 91)(164, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](165, " Unchecked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](166, "div", 89)(167, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](168, "input", 93)(169, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](170, " Checked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](171, "div", 94)(172, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](173, "input", 95)(174, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](175, " Disabled Unchecked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](176, "div", 94)(177, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](178, "input", 96)(179, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](180, " Disabled Checked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](181, "div", 72)(182, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](183, "Radios");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](184, "div", 97)(185, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](186, "input", 98)(187, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](188, " Radio is off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](189, "div", 97)(190, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](191, "input", 99)(192, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](193, " Radio is on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](194, "div", 100)(195, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](196, "input", 101)(197, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](198, " Disabled radio is off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](199, "div", 100)(200, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](201, "input", 102)(202, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](203, " Disabled radio is on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](204, "div", 72)(205, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](206, "Toggle Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](207, "bSwitch", 103)(208, "br")(209, "bSwitch", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](210, "div", 72)(211, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](212, "Sliders");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](213, "div", 105)(214, "br")(215, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](216, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](217, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](218, "div", 109)(219, "div", 10)(220, "div", 110)(221, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](222, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](223, "nav", 111)(224, "div", 1)(225, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](226, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](227, "button", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_227_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](228, "span", 5)(229, "span", 6)(230, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](231, "div", 114)(232, "ul", 15)(233, "li", 115)(234, "a", 116)(235, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](236, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](237, "li", 28)(238, "a", 116)(239, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](240, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](241, "li", 117)(242, "a", 118)(243, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](244, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](245, IndexComponent_div_245_Template, 7, 0, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](246, "div", 110)(247, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](248, "Menu with Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](249, "nav", 120)(250, "div", 1)(251, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](252, " Icons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](253, "button", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_253_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](254, "span", 5)(255, "span", 6)(256, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](257, "div", 122)(258, "ul", 123)(259, "li", 28)(260, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](261, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](262, "li", 28)(263, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](264, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](265, "li", 117)(266, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](267, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](268, IndexComponent_div_268_Template, 15, 0, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](269, "h3", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](270, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](271, "div", 130)(272, "div", 131)(273, "nav", 111)(274, "div", 1)(275, "div", 2)(276, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](277, " Primary color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](278, "button", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_278_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](279, "span", 5)(280, "span", 6)(281, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](282, "div", 133)(283, "ul", 123)(284, "li", 115)(285, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](286, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](287, " Discover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](288, "li", 28)(289, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](290, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](291, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](292, "li", 28)(293, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](294, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](295, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](296, "nav", 120)(297, "div", 1)(298, "div", 2)(299, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](300, " Info Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](301, "button", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_301_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](302, "span", 5)(303, "span", 6)(304, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](305, "div", 138)(306, "ul", 123)(307, "li", 115)(308, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](309, " Discover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](310, "li", 28)(311, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](312, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](313, "li", 28)(314, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](315, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](316, "nav", 139)(317, "div", 1)(318, "div", 2)(319, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](320, " Success Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](321, "button", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_321_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](322, "span", 5)(323, "span", 6)(324, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](325, "div", 141)(326, "ul", 123)(327, "li", 115)(328, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](329, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](330, "li", 28)(331, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](332, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](333, "li", 28)(334, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](335, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](336, "nav", 142)(337, "div", 1)(338, "div", 2)(339, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](340, " Warning Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](341, "button", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_341_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](342, "span", 5)(343, "span", 6)(344, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](345, "div", 144)(346, "ul", 123)(347, "li", 28)(348, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](349, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](350, "li", 28)(351, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](352, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](353, "li", 28)(354, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](355, "i", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](356, "li", 28)(357, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](358, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](359, "nav", 146)(360, "div", 1)(361, "div", 2)(362, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](363, " Danger Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](364, "button", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_364_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](365, "span", 5)(366, "span", 6)(367, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](368, "div", 148)(369, "ul", 123)(370, "li", 28)(371, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](372, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](373, " Share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](374, "li", 28)(375, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](376, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](377, " Tweet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](378, "li", 28)(379, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](380, "i", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](381, " Pin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](382, "nav", 150)(383, "div", 1)(384, "div", 2)(385, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](386, " Transparent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](387, "button", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_387_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](388, "span", 5)(389, "span", 6)(390, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](391, "div", 152)(392, "ul", 123)(393, "li", 28)(394, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](395, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](396, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](397, "li", 28)(398, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](399, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](400, " Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](401, "li", 28)(402, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](403, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](404, " Instagram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](405, "div", 153)(406, "div", 1)(407, "div", 45)(408, "h3", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](409, "Navigation Tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](410, "div", 10)(411, "div", 155)(412, "div", 154)(413, "small", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](414, " With icons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](415, "div", 157)(416, "div", 158)(417, "tabset", 159)(418, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](419, IndexComponent_ng_template_419_Template, 2, 0, "ng-template", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](420, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](421, " Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](422, "br")(423, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](424, " Dramatically visualize customer directed convergence without revolutionary ROI. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](425, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](426, IndexComponent_ng_template_426_Template, 2, 0, "ng-template", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](427, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](428, " Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](429, "br")(430, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](431, " Dynamically innovate resource-leveling customer service for state of the art customer service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](432, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](433, IndexComponent_ng_template_433_Template, 2, 0, "ng-template", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](434, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](435, " Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](436, "br")(437, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](438, " Dramatically maintain clicks-and-mortar solutions without functional solutions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](439, "div", 155)(440, "div", 154)(441, "small", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](442, " With text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](443, "div", 157)(444, "div", 158)(445, "tabset", 159)(446, "tab", 161)(447, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](448, " These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](449, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](450, " But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](451, "tab", 162)(452, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](453, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u00E2\u0080\u0099s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that\u00E2\u0080\u0099s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](454, "tab", 163)(455, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](456, " I think that\u00E2\u0080\u0099s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u00E2\u0080\u0099s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](457, "div", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](458, "img", 165)(459, "img", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](460, "div", 1)(461, "div", 10)(462, "div", 110)(463, "h3", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](464, "Progress Bars");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](465, "div", 168)(466, "span", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](467, " Default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](468, "progressbar", 170)(469, "span", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](470, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](471, "div", 172)(472, "span", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](473, " Danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](474, "progressbar", 173)(475, "span", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](476, " 60% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](477, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](478, "h3", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](479, "Navigation Pills");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](480, "tabset", 175)(481, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](482, IndexComponent_ng_template_482_Template, 2, 0, "ng-template", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](483, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](484, IndexComponent_ng_template_484_Template, 2, 0, "ng-template", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](485, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](486, IndexComponent_ng_template_486_Template, 2, 0, "ng-template", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](487, "div", 110)(488, "h3", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](489, "Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](490, "pagination", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_pagination_ngModelChange_490_listener($event) {
          return ctx.pagination1 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](491, "pagination", 177)(492, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](493, "h3", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](494, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](495, "span", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](496, " Default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](497, "span", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](498, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](499, "span", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](500, " Success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](501, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](502, " Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](503, "span", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](504, " Warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](505, "span", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](506, " Danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](507, "span", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](508, " Neutral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](509, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](510, "div", 185)(511, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](512, "div", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](513, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](514, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](515, "alert", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](516, "span", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](517, "span")(518, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](519, " Congrats! - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](520, " This is a regular notification made with \".alert-primary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](521, "alert", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](522, "span", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](523, "span")(524, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](525, " Heads up! - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](526, " This is a regular notification made with \".alert-info\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](527, "alert", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](528, "span", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](529, "span")(530, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](531, " Well done! - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](532, " This is a regular notification made with \".alert-success\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](533, "alert", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](534, "span", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](535, "span")(536, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](537, " Warning! - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](538, " This is a regular notification made with \".alert-warning\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](539, "alert", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](540, "span", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](541, "span")(542, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](543, " Oh snap! - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](544, " This is a regular notification made with \".alert-danger\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](545, "div", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](546, "img", 44)(547, "img", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](548, "div", 1)(549, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](550, "Typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](551, "div", 195)(552, "div", 10)(553, "div", 56)(554, "div", 196)(555, "h1")(556, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](557, " Header 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](558, " The Life of BLK\u2022 Design System");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](559, "div", 196)(560, "h2")(561, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](562, " Header 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](563, " The Life of BLK\u2022 Design System");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](564, "div", 196)(565, "h3")(566, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](567, " Header 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](568, " The Life of BLK\u2022 Design System");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](569, "div", 196)(570, "h4")(571, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](572, " Header 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](573, " The Life of BLK\u2022 Design System");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](574, "div", 196)(575, "h5")(576, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](577, " Header 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](578, " The Life of BLK\u2022 Design System");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](579, "div", 196)(580, "h6")(581, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](582, " Header 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](583, " The Life of BLK\u2022 Design System");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](584, "div", 196)(585, "p")(586, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](587, " Paragraph ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](588, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u00E2\u0080\u0099s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](589, "div", 196)(590, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](591, " Quote ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](592, "blockquote")(593, "p", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](594, " \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u00E2\u0080\u0099s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](595, "br")(596, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](597, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](598, " - Noaa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](599, "div", 196)(600, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](601, " Muted Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](602, "p", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](603, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](604, "div", 196)(605, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](606, " Primary Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](607, "p", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](608, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](609, "div", 196)(610, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](611, " Info Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](612, "p", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](613, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](614, "div", 196)(615, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](616, " Success Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](617, "p", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](618, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](619, "div", 196)(620, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](621, " Warning Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](622, "p", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](623, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](624, "div", 196)(625, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](626, " Danger Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](627, "p", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](628, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](629, "div", 196)(630, "h2")(631, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](632, " Small Tag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](633, " Header with small subtitle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](634, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](635, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](636, " Use \"small\" tag for the headers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](637, "div", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](638, "div", 205)(639, "h3", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](640, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](641, "div", 10)(642, "div", 206)(643, "small", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](644, " Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](645, "img", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](646, "div", 206)(647, "small", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](648, " Circle Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](649, "img", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](650, "div", 210)(651, "small", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](652, " Raised ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](653, "img", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](654, "div", 210)(655, "small", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](656, " Circle Raised ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](657, "img", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](658, "div", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](659, "img", 214)(660, "img", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](661, "div", 1)(662, "h3", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](663, "Javascript components");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](664, "h4", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](665, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](666, "div", 216)(667, "div", 217)(668, "button", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_668_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);

          const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](862);

          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r10.show());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](669, " Launch Modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](670, "div", 217)(671, "button", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_671_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);

          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](879);

          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r11.show());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](672, " Launch Modal Mini ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](673, "div", 217)(674, "button", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_674_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);

          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](896);

          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r12.show());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](675, " Launch Modal Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](676, "br")(677, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](678, "h4", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](679, "Datepicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](680, "div", 10)(681, "div", 217)(682, "div", 222)(683, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](684, "input", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](685, "div", 10)(686, "div", 110)(687, "h4", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](688, "Popovers");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](689, "button", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](690, " On top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](691, "button", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](692, " On right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](693, "button", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](694, " On bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](695, "button", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](696, " On left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](697, "div", 110)(698, "h4", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](699, "Tooltips");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](700, "button", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](701, " On left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](702, "button", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](703, " On top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](704, "button", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](705, " On bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](706, "button", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](707, " On right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](708, "div", 232)(709, "br")(710, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](711, "div", 233)(712, "div", 1)(713, "div", 45)(714, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](715, "Carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](716, "div", 234)(717, "div", 235)(718, "h1", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](719, "Bootstrap carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](720, "p", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](721, " Black Design comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](722, "a", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](723, " See all components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](724, "div", 239)(725, "carousel", 240)(726, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](727, "img", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](728, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](729, "img", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](730, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](731, "img", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](732, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](733, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](734, "div", 1)(735, "div", 245)(736, "div", 246)(737, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](738, "Nucleo Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](739, "h4", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](740, " BLK\u2022 Design System PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with BLK\u2022 Design System PRO Make sure you check all of them and use those that you like the most. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](741, "div", 248)(742, "a", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](743, " View Demo Icons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](744, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](745, " View All Icons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](746, "div", 251)(747, "a", 252)(748, "div", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](749, "i", 254)(750, "i", 255)(751, "i", 256)(752, "i", 257)(753, "i", 258)(754, "i", 259)(755, "i", 260)(756, "i", 261)(757, "i", 262)(758, "i", 263)(759, "i", 264)(760, "i", 265)(761, "i", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](762, "span", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](763, " Eplore all the 21.000+ Nucleo Icons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](764, "div", 268)(765, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](766, "div", 269)(767, "div", 270)(768, "div", 271)(769, "div", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](770, "div", 273)(771, "div", 239)(772, "h3", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](773, " A beautiful Black Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](774, "span", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](775, " completed with examples ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](776, "p", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](777, " The Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 Design System. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](778, "div", 248)(779, "a", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](780, " Register Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](781, "div", 278)(782, "div", 279)(783, "div", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](784, "img", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](785, "h4", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](786, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](787, "div", 282)(788, "form", 283)(789, "div", 84)(790, "div", 80)(791, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](792, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](793, "input", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](794, "div", 84)(795, "div", 80)(796, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](797, "i", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](798, "input", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](799, "div", 84)(800, "div", 80)(801, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](802, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](803, "input", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](804, "div", 288)(805, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](806, "input", 91)(807, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](808, " I agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](809, "a", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](810, " terms and conditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](811, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](812, "div", 290)(813, "a", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](814, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](815, "div", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](816, "img", 44)(817, "div", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](818, "div", 293)(819, "div", 10)(820, "div", 294)(821, "a", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](822, "img", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](823, "a", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](824, " View Landing Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](825, "div", 294)(826, "a", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](827, "img", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](828, "a", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](829, " View Profile Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](830, "div", 299, 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](832, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](833, "div", 1)(834, "div", 301)(835, "div", 302)(836, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](837, " Do you love this Bootstrap 4 Angular Design System? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](838, "h4", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](839, " Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the design system in HTML format. Start a new project or give an old Bootstrap project a new look! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](840, "div", 302)(841, "a", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](842, " Download Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](843, "br")(844, "br")(845, "br")(846, "br")(847, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](848, "div", 304)(849, "div", 239)(850, "h3", 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](851, " Thank you for supporting us! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](852, "h4", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](853, " Let's get in touch on any of these platforms. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](854, "div", 307)(855, "a", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](856, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](857, "a", 309);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](858, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](859, "a", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](860, "i", 311);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](861, "div", 312, 313)(863, "div", 314)(864, "div", 315)(865, "div", 316)(866, "button", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_866_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);

          const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](862);

          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r10.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](867, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](868, "h4", 318);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](869, "Modal title");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](870, "div", 319)(871, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](872, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](873, "div", 320)(874, "button", 321);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](875, "Nice Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](876, "button", 322);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_876_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);

          const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](862);

          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r10.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](877, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](878, "div", 323, 324)(880, "div", 314)(881, "div", 315)(882, "div", 316)(883, "button", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_883_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);

          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](879);

          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r11.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](884, "i", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](885, "div", 326);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](886, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](887, "div", 319)(888, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](889, "Always have an access to your profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](890, "div", 320)(891, "button", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](892, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](893, "button", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_893_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);

          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](879);

          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r11.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](894, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](895, "div", 329, 330)(897, "div", 314)(898, "div", 315)(899, "div", 316)(900, "button", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_900_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);

          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](896);

          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r12.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](901, "i", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](902, "div", 331)(903, "h3", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](904, "Sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](905, "div", 319)(906, "div", 333)(907, "a", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](908, "img", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](909, "a", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](910, "img", 337);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](911, "div", 338)(912, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](913, " Or sign in with credentials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](914, "form", 339)(915, "div", 340)(916, "div", 341)(917, "div", 80)(918, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](919, "i", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](920, "input", 342);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function IndexComponent_Template_input_focus_920_listener() {
          return ctx.focus1 = true;
        })("blur", function IndexComponent_Template_input_blur_920_listener() {
          return ctx.focus1 = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](921, "div", 73)(922, "div", 341)(923, "div", 80)(924, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](925, "i", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](926, "input", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function IndexComponent_Template_input_focus_926_listener() {
          return ctx.focus2 = true;
        })("blur", function IndexComponent_Template_input_blur_926_listener() {
          return ctx.focus2 = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](927, "div", 345)(928, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](929, "input", 93)(930, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](931, " Remember me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](932, "div", 346)(933, "button", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](934, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](935, "footer", 348)(936, "div", 1)(937, "div", 10)(938, "div", 349)(939, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](940, "BLK\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](941, "div", 349)(942, "ul", 350)(943, "li", 28)(944, "a", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](945, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](946, "li", 28)(947, "a", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](948, " Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](949, "li", 28)(950, "a", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](951, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](952, "li", 28)(953, "a", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](954, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](955, "div", 349)(956, "ul", 350)(957, "li", 28)(958, "a", 352);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](959, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](960, "li", 28)(961, "a", 353);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](962, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](963, "li", 28)(964, "a", 354);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](965, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](966, "li", 28)(967, "a", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](968, " License ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](969, "div", 349)(970, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](971, "Follow us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](972, "div", 356)(973, "a", 357);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](974, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](975, "a", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](976, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](977, "a", 359);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](978, "i", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](66, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](67, _c4, ctx.focus === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("switch-on-color", "danger")("switch-off-color", "danger")("switch-off-text", " ")("switch-on-text", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("switch-on-color", "danger")("switch-off-color", "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.pagination1)("totalItems", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("boundaryLinks", true)("totalItems", 45)("ngModel", ctx.pagination);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", "primary alert-with-icon")("dismissible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", "info alert-with-icon")("dismissible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", "success alert-with-icon")("dismissible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", "warning alert-with-icon")("dismissible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", "danger alert-with-icon")("dismissible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](69, _c5))("bsValue", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("showIndicators", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](70, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](71, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](72, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](73, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](74, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](75, _c4, ctx.focus1 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](77, _c4, ctx.focus2 === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](79, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](80, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](81, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](82, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__.BsDropdownDirective, ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_2__.ProgressbarComponent, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipDirective, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverDirective, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__.CollapseDirective, jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__.JwBootstrapSwitchNg2Component, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsetComponent, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__.TabHeadingDirective, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_8__.AlertComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerInputDirective, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__.SlideComponent, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__.CarouselComponent, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.ModalDirective],
    encapsulation: 2
  });
  return IndexComponent;
})();

/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 15896);
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ 9115);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 78539);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 47273);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 83401);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ 38147);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 38495);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 15215);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 26528);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ 34307);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/popover */ 22367);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/index.component */ 67479);
/* harmony import */ var _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/profilepage/profilepage.component */ 48282);
/* harmony import */ var _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/registerpage/registerpage.component */ 7536);
/* harmony import */ var _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/landingpage/landingpage.component */ 31073);
/* harmony import */ var _crypto_home_crypto_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./crypto-home/crypto-home.component */ 15868);
/* harmony import */ var _cipher_cipher_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cipher/cipher.component */ 11581);
/* harmony import */ var _shift_cipher_shift_cipher_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shift-cipher/shift-cipher.component */ 32439);
/* harmony import */ var _affine_cipher_affine_cipher_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./affine-cipher/affine-cipher.component */ 3562);
/* harmony import */ var _substitution_cipher_substitution_cipher_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./substitution-cipher/substitution-cipher.component */ 298);
/* harmony import */ var _hill_cipher_hill_cipher_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hill-cipher/hill-cipher.component */ 48816);
/* harmony import */ var _permutation_cipher_permutation_cipher_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./permutation-cipher/permutation-cipher.component */ 72757);
/* harmony import */ var _vigenere_cipher_vigenere_cipher_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vigenere-cipher/vigenere-cipher.component */ 62912);
/* harmony import */ var _attacks_attacks_attacks_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./attacks/attacks/attacks.component */ 63593);
/* harmony import */ var _attacks_shift_attack_shift_attack_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./attacks/shift-attack/shift-attack.component */ 28237);
/* harmony import */ var _attacks_affine_attack_affine_attack_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./attacks/affine-attack/affine-attack.component */ 28058);
/* harmony import */ var _attacks_substitution_attack_substitution_attack_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./attacks/substitution-attack/substitution-attack.component */ 5903);
/* harmony import */ var _attacks_vigenere_attack_vigenere_attack_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./attacks/vigenere-attack/vigenere-attack.component */ 26445);
/* harmony import */ var _attacks_hill_attack_hill_attack_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./attacks/hill-attack/hill-attack.component */ 33818);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 82402);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./footer/footer.component */ 73024);
/* harmony import */ var _squares_presentation_squares_presentation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./squares-presentation/squares-presentation.component */ 64887);
/* harmony import */ var _block_ciphers_block_ciphers_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./block-ciphers/block-ciphers.component */ 62795);
/* harmony import */ var _triple_des_cipher_triple_des_cipher_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./triple-des-cipher/triple-des-cipher.component */ 63457);
/* harmony import */ var _aes_cipher_aes_cipher_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./aes-cipher/aes-cipher.component */ 56041);
/* harmony import */ var _simplified_des_cipher_simplified_des_cipher_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./simplified-des-cipher/simplified-des-cipher.component */ 18313);
/* harmony import */ var _gamma_gamma_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./gamma/gamma.component */ 77593);
/* harmony import */ var _gamma_cipher_gamma_cipher_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./gamma-cipher/gamma-cipher.component */ 18302);
/* harmony import */ var _rabin_cipher_rabin_cipher_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./rabin-cipher/rabin-cipher.component */ 44240);
/* harmony import */ var _rsacipher_rsacipher_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./rsacipher/rsacipher.component */ 20908);
/* harmony import */ var _public_key_ciphers_public_key_ciphers_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./public-key-ciphers/public-key-ciphers.component */ 17016);
/* harmony import */ var _el_gamal_cipher_el_gamal_cipher_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./el-gamal-cipher/el-gamal-cipher.component */ 40210);
/* harmony import */ var _el_gamal_elip_cipher_el_gamal_elip_cipher_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./el-gamal-elip-cipher/el-gamal-elip-cipher.component */ 15522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ 22560);




























































let PagesModule = /*#__PURE__*/(() => {
  class PagesModule {}

  PagesModule.ɵfac = function PagesModule_Factory(t) {
    return new (t || PagesModule)();
  };

  PagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({
    type: PagesModule
  });
  PagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_44__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_46__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_47__.RouterModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownModule.forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_1__.ProgressbarModule.forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipModule.forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__.PopoverModule.forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__.CollapseModule.forRoot(), jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_48__.JwBootstrapSwitchNg2Module, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__.TabsModule.forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationModule.forRoot(), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__.AlertModule.forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDatepickerModule.forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__.CarouselModule.forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_46__.ReactiveFormsModule]
  });
  return PagesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_11__.IndexComponent, _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_12__.ProfilepageComponent, _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_13__.RegisterpageComponent, _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_14__.LandingpageComponent, _crypto_home_crypto_home_component__WEBPACK_IMPORTED_MODULE_15__.CryptoHomeComponent, _cipher_cipher_component__WEBPACK_IMPORTED_MODULE_16__.CipherComponent, _shift_cipher_shift_cipher_component__WEBPACK_IMPORTED_MODULE_17__.ShiftCipherComponent, _affine_cipher_affine_cipher_component__WEBPACK_IMPORTED_MODULE_18__.AffineCipherComponent, _substitution_cipher_substitution_cipher_component__WEBPACK_IMPORTED_MODULE_19__.SubstitutionCipherComponent, _hill_cipher_hill_cipher_component__WEBPACK_IMPORTED_MODULE_20__.HillCipherComponent, _permutation_cipher_permutation_cipher_component__WEBPACK_IMPORTED_MODULE_21__.PermutationCipherComponent, _vigenere_cipher_vigenere_cipher_component__WEBPACK_IMPORTED_MODULE_22__.VigenereCipherComponent, _attacks_attacks_attacks_component__WEBPACK_IMPORTED_MODULE_23__.AttacksComponent, _attacks_shift_attack_shift_attack_component__WEBPACK_IMPORTED_MODULE_24__.ShiftAttackComponent, _attacks_affine_attack_affine_attack_component__WEBPACK_IMPORTED_MODULE_25__.AffineAttackComponent, _attacks_substitution_attack_substitution_attack_component__WEBPACK_IMPORTED_MODULE_26__.SubstitutionAttackComponent, _attacks_vigenere_attack_vigenere_attack_component__WEBPACK_IMPORTED_MODULE_27__.VigenereAttackComponent, _attacks_hill_attack_hill_attack_component__WEBPACK_IMPORTED_MODULE_28__.HillAttackComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_29__.TopBarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_30__.FooterComponent, _squares_presentation_squares_presentation_component__WEBPACK_IMPORTED_MODULE_31__.SquaresPresentationComponent, _block_ciphers_block_ciphers_component__WEBPACK_IMPORTED_MODULE_32__.BlockCiphersComponent, _triple_des_cipher_triple_des_cipher_component__WEBPACK_IMPORTED_MODULE_33__.TripleDesCipherComponent, _aes_cipher_aes_cipher_component__WEBPACK_IMPORTED_MODULE_34__.AesCipherComponent, _simplified_des_cipher_simplified_des_cipher_component__WEBPACK_IMPORTED_MODULE_35__.SimplifiedDesCipherComponent, _gamma_gamma_component__WEBPACK_IMPORTED_MODULE_36__.GammaComponent, _gamma_cipher_gamma_cipher_component__WEBPACK_IMPORTED_MODULE_37__.GammaCipherComponent, _rabin_cipher_rabin_cipher_component__WEBPACK_IMPORTED_MODULE_38__.RabinCipherComponent, _rsacipher_rsacipher_component__WEBPACK_IMPORTED_MODULE_39__.RSACipherComponent, _public_key_ciphers_public_key_ciphers_component__WEBPACK_IMPORTED_MODULE_40__.PublicKeyCiphersComponent, _el_gamal_cipher_el_gamal_cipher_component__WEBPACK_IMPORTED_MODULE_41__.ElGamalCipherComponent, _el_gamal_elip_cipher_el_gamal_elip_cipher_component__WEBPACK_IMPORTED_MODULE_42__.ElGamalElipCipherComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_44__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_46__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_47__.RouterModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownModule, ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_1__.ProgressbarModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipModule, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__.PopoverModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__.CollapseModule, jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_48__.JwBootstrapSwitchNg2Module, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__.TabsModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationModule, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__.AlertModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDatepickerModule, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalModule, _angular_forms__WEBPACK_IMPORTED_MODULE_46__.ReactiveFormsModule],
    exports: [_index_index_component__WEBPACK_IMPORTED_MODULE_11__.IndexComponent, _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_12__.ProfilepageComponent, _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_13__.RegisterpageComponent, _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_14__.LandingpageComponent]
  });
})();

/***/ }),

/***/ 72757:
/*!**************************************************************************!*\
  !*** ./src/app/pages/permutation-cipher/permutation-cipher.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermutationCipherComponent": () => (/* binding */ PermutationCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/correct-key.directive */ 5975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function PermutationCipherComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div")(3, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9)(6, "blockquote")(7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.resposeDymcMess, " text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.cipherText, " ");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let PermutationCipherComponent = /*#__PURE__*/(() => {
  class PermutationCipherComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.correctKey)(Array.from({
          length: 26
        }, (_, i) => i + 1), 0, 25), (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.isPermutationNum)()]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$")])
      });
      this.cipherText = "";
      this.submitted = false;
      this.resposeDymcMess = "";
    }

    ngOnInit() {}

    random() {
      let ranLen = Math.floor(Math.random() * 20 + 6);
      let arrBase = Array.from({
        length: ranLen
      }, (_, i) => i + 1);
      let inx, aux;

      for (let i = 0; i < ranLen; i++) {
        inx = Math.floor(Math.random() * ranLen);
        aux = arrBase[inx];
        arrBase[inx] = arrBase[i];
        arrBase[i] = aux;
      }

      this.arguments.patchValue({
        key: arrBase.toString()
      });
    }

    encrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      let arrkeys = this.arguments.get("key").value.split(",").map(i => Number(i));
      this.connection.permutationEncrypt(arrkeys, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.resposeDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      let arrkeys = this.arguments.get("key").value.split(",").map(i => Number(i));
      this.connection.permutationDecrypt(arrkeys, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }

        this.submitted = true;
      });
    }

    get key() {
      return this.arguments.get("key");
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

    forceUpperCase() {
      this.arguments.patchValue({
        key: this.arguments.get("key").value.toUpperCase()
      });
    }

  }

  PermutationCipherComponent.ɵfac = function PermutationCipherComponent_Factory(t) {
    return new (t || PermutationCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__.NormalizerService));
  };

  PermutationCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PermutationCipherComponent,
    selectors: [["app-permutation-cipher"]],
    decls: 19,
    vars: 11,
    consts: [[3, "formGroup"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-lg-6", "ml-auto"], [3, "ngClass"], ["placeholder", "Key", "formControlName", "key", 1, "textkey", "form-control", 3, "ngClass"], [1, "col-sm-3", "col-lg-3", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "mb-3"], [1, "blockquote", "blockquote-danger"]],
    template: function PermutationCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermutationCipherComponent_Template_button_click_7_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermutationCipherComponent_Template_button_click_13_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermutationCipherComponent_Template_button_click_16_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PermutationCipherComponent_div_18_Template, 9, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.key.invalid && ctx.key.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx.key.invalid && ctx.key.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm11dGF0aW9uLWNpcGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtBQUtGOztBQUhBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0FBTUYiLCJmaWxlIjoicGVybXV0YXRpb24tY2lwaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmRvbS1idG4tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYW5kb20tYnRuIHtcbiAgbWFyZ2luOiAwJTtcbn1cbi50ZXhydG9jciB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG59XG4udGV4dGtleSB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LWhlaWdodDogM3JlbTtcbn1cbi5zdWJtaXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxhaW5UZXh0RXJyb3Ige1xuICBib3JkZXI6IDAuMDlyZW0gc29saWQgI2YzMzYyMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VjMjUwZDtcbn1cbiJdfQ== */"]
  });
  return PermutationCipherComponent;
})();

/***/ }),

/***/ 17016:
/*!**************************************************************************!*\
  !*** ./src/app/pages/public-key-ciphers/public-key-ciphers.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicKeyCiphersComponent": () => (/* binding */ PublicKeyCiphersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../top-bar/top-bar.component */ 82402);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 73024);
/* harmony import */ var _squares_presentation_squares_presentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../squares-presentation/squares-presentation.component */ 64887);
/* harmony import */ var _rabin_cipher_rabin_cipher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rabin-cipher/rabin-cipher.component */ 44240);
/* harmony import */ var _rsacipher_rsacipher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rsacipher/rsacipher.component */ 20908);
/* harmony import */ var _el_gamal_cipher_el_gamal_cipher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../el-gamal-cipher/el-gamal-cipher.component */ 40210);
/* harmony import */ var _el_gamal_elip_cipher_el_gamal_elip_cipher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../el-gamal-elip-cipher/el-gamal-elip-cipher.component */ 15522);









let PublicKeyCiphersComponent = /*#__PURE__*/(() => {
  class PublicKeyCiphersComponent {
    constructor() {}

    ngOnInit() {}

  }

  PublicKeyCiphersComponent.ɵfac = function PublicKeyCiphersComponent_Factory(t) {
    return new (t || PublicKeyCiphersComponent)();
  };

  PublicKeyCiphersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: PublicKeyCiphersComponent,
    selectors: [["app-public-key-ciphers"]],
    decls: 16,
    vars: 0,
    consts: [[1, "col-md-10", "ml-auto", "col-xl-8", "mr-auto"], [1, "mb-3"], [1, "card"], [1, "card-header"], [1, "nav-tabs-danger", "justify-content-center"], ["heading", "RSA"], ["heading", "Rabin"], ["heading", "ElGamal"], ["heading", "ElGamal Elliptic"]],
    template: function PublicKeyCiphersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-top-bar")(1, "app-squares-presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "tabset", 4)(7, "tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-rsacipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-rabin-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "app-el-gamal-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-el-gamal-elip-cipher");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-footer");
      }
    },
    dependencies: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsetComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _squares_presentation_squares_presentation_component__WEBPACK_IMPORTED_MODULE_3__.SquaresPresentationComponent, _rabin_cipher_rabin_cipher_component__WEBPACK_IMPORTED_MODULE_4__.RabinCipherComponent, _rsacipher_rsacipher_component__WEBPACK_IMPORTED_MODULE_5__.RSACipherComponent, _el_gamal_cipher_el_gamal_cipher_component__WEBPACK_IMPORTED_MODULE_6__.ElGamalCipherComponent, _el_gamal_elip_cipher_el_gamal_elip_cipher_component__WEBPACK_IMPORTED_MODULE_7__.ElGamalElipCipherComponent],
    styles: [".info[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpYy1rZXktY2lwaGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGIiwiZmlsZSI6InB1YmxpYy1rZXktY2lwaGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG4uY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbiJdfQ== */"]
  });
  return PublicKeyCiphersComponent;
})();

/***/ }),

/***/ 44240:
/*!**************************************************************!*\
  !*** ./src/app/pages/rabin-cipher/rabin-cipher.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RabinCipherComponent": () => (/* binding */ RabinCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/correct-key.directive */ 5975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);







function RabinCipherComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Key can't be empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function RabinCipherComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Key must integer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function RabinCipherComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RabinCipherComponent_div_17_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RabinCipherComponent_div_17_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.key.errors == null ? null : ctx_r1.key.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.key.errors == null ? null : ctx_r1.key.errors.pattern);
  }
}

function RabinCipherComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "P can't be empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function RabinCipherComponent_div_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "P must be a prime number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function RabinCipherComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RabinCipherComponent_div_32_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RabinCipherComponent_div_32_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.primeP.errors == null ? null : ctx_r2.primeP.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.primeP.errors == null ? null : ctx_r2.primeP.errors.incorrectKey);
  }
}

function RabinCipherComponent_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Q can't be empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function RabinCipherComponent_div_42_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Q must be a prime number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function RabinCipherComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RabinCipherComponent_div_42_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RabinCipherComponent_div_42_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.primeQ.errors == null ? null : ctx_r3.primeQ.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.primeQ.errors == null ? null : ctx_r3.primeQ.errors.incorrectKey);
  }
}

function RabinCipherComponent_div_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Plain/Cipher text can't be empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function RabinCipherComponent_div_53_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Plain/Cipher text can only contain base64 characters and must have less that 350 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function RabinCipherComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RabinCipherComponent_div_53_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RabinCipherComponent_div_53_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.plainText.errors == null ? null : ctx_r4.plainText.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.plainText.errors == null ? null : ctx_r4.plainText.errors.pattern);
  }
}

function RabinCipherComponent_div_61_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const op_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](op_r15);
  }
}

function RabinCipherComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 30)(2, "div")(3, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 30)(6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RabinCipherComponent_div_61_li_7_Template, 3, 1, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.responseDymcMess, " text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.cipherText);
  }
}

let RabinCipherComponent = /*#__PURE__*/(() => {
  class RabinCipherComponent {
    constructor(connection) {
      this.connection = connection;
      this.cipherText = [];
      this.submitted = false;
      this.responseDymcMess = "";
    }

    ngOnInit() {
      this.cipherParams = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("14443403977770638083196388074072412771752027790723542214752600238839559282478036432190958080480983403567162424063045086776220245076110113721218865157184417970812309971792122386473221446050308937567624498512942890562368520503660118043639279301760715310642938008684951217964541488511935350354482809830166115393763556779195661854049003081420465314650369956615692937779924819875592272159252631301517464245861062082622169338580998538008704555516180612002034288665241495253548826314209874563807205642631828042192396071686788646015797612222048748515367920269250157047147985942627954931828511795003899934920947068931792634569", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("[1-9][0-9]*")]),
        primeP: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("135648942413790849897897911838681155598521669805497911234458726600362059728976843982146138281723456386392185151013475677683211386965337970962725771733129761317202333164009440274059913083166889973115370669946795272878868079932904846472401237372813788562974453670113388297677484510268428898014357412803924175051", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.isPrimeVal)()]),
        primeQ: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("106476347848785282916716828087207671024561951299757411798047117398254813412031975039825077404473801563560893720170973231560091041645426113806470165200441948249009597935796606190421348849225640301842865031064597889227374739270777328243164882655362809416364056858184496320184376758645891256615120690684109378619", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.isPrimeVal)()]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("attack at dawn", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("[+/=0-9a-zA-Z ]{0,350}")])
      });
    }

    get key() {
      return this.cipherParams.get("key");
    }

    get primeP() {
      return this.cipherParams.get("primeP");
    }

    get primeQ() {
      return this.cipherParams.get("primeQ");
    }

    get plainText() {
      return this.cipherParams.get("plainText");
    }

    random() {
      this.connection.rabinGetKeys().subscribe(ansKeys => {
        this.key.setValue(ansKeys.publicKey.N);
        this.primeQ.setValue(ansKeys.privateKey.P);
        this.primeP.setValue(ansKeys.privateKey.Q);
      });
    }

    encrypt() {
      this.connection.rabinEncrypt(this.key.value, this.plainText.value.replace(/ /g, "")).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = [ans.cipherText];
          this.responseDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      this.connection.rabinDecrypt(this.primeP.value, this.primeQ.value, this.plainText.value.replace(/ /g, "")).subscribe(ans => {
        if (!ans.error) {
          console.log(ans);
          this.cipherText = ans.decipherTextOps;
          this.responseDymcMess = "Decipher";
        }

        this.submitted = true;
      });
    }

  }

  RabinCipherComponent.ɵfac = function RabinCipherComponent_Factory(t) {
    return new (t || RabinCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService));
  };

  RabinCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RabinCipherComponent,
    selectors: [["app-rabin-cipher"]],
    decls: 62,
    vars: 12,
    consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-9", 3, "formGroup"], ["formDir", "ngForm"], [1, "form-row"], [1, "text-muted"], ["for", "key"], [1, "col-sm-9", "col-lg-9", "mr-auto"], [1, "input-group"], ["type", "text", "formControlName", "key", "id", "key", "required", "", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "tim-icons", "icon-lock-circle"], ["class", "alert alert-danger", 4, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "primeP"], ["type", "text", "formControlName", "primeP", "id", "primeP", "required", "", 1, "form-control"], ["for", "primeQ"], ["type", "text", "formControlName", "primeQ", "id", "primeQ", "required", "", 1, "form-control"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "form-group", "col-md-12"], ["for", "plainText"], ["id", "plainText", "formControlName", "plainText", "rows", "4", "required", "", 1, "form-control", 2, "max-height", "150px"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], [1, "mb-3"], [4, "ngFor", "ngForOf"], [1, "blockquote", "blockquote-danger"]],
    template: function RabinCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2, 3)(4, "div", 4)(5, "small", 5)(6, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Public Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4)(11, "div", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RabinCipherComponent_div_17_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4)(19, "small", 5)(20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Private Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Prime P");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10)(30, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, RabinCipherComponent_div_32_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15)(34, "div", 16)(35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Prime Q");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 10)(40, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, RabinCipherComponent_div_42_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 1)(44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RabinCipherComponent_Template_button_click_44_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Random Key ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 14)(47, "div", 22)(48, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Plain/Cipher Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 16)(51, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, RabinCipherComponent_div_53_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 14)(55, "div", 25)(56, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RabinCipherComponent_Template_button_click_56_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 25)(59, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RabinCipherComponent_Template_button_click_59_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, RabinCipherComponent_div_61_Template, 8, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.cipherParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.key.invalid && ctx.key.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.primeP.invalid && ctx.primeP.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.primeQ.invalid && ctx.primeQ.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-success", ctx.plainText.valid && ctx.plainText.touched)("has-danger", ctx.plainText.invalid && ctx.plainText.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.plainText.invalid && ctx.plainText.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.key.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.primeQ.invalid || ctx.primeP.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.addResourcesS[_ngcontent-%COMP%] {\n  font-size: 38px;\n  color: #454880;\n  border: 2px dashed #454880;\n  border-radius: 10px;\n  display: inline-block;\n  padding: 2rem 5rem;\n}\n\n#file[_ngcontent-%COMP%] {\n  max-width: 300px;\n  height: auto;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: #171941;\n}\n\n.random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhYmluLWNpcGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0FBTUY7O0FBSkE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFPRjs7QUFMQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtBQVNGOztBQVBBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0FBVUYiLCJmaWxlIjoicmFiaW4tY2lwaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmRvbS1idG4tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYW5kb20tYnRuIHtcbiAgbWFyZ2luOiAwJTtcbn1cbi50ZXhydG9jciB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG59XG4udGV4dGtleSB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LWhlaWdodDogM3JlbTtcbn1cbi5hZGRSZXNvdXJjZXNTIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBjb2xvcjogIzQ1NDg4MDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICM0NTQ4ODA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xufVxuXG4jZmlsZSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xufVxuXG4ucmFuZG9tLWJ0bi1jb250IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJhbmRvbS1idG4ge1xuICBtYXJnaW46IDAlO1xufVxuLnRleHJ0b2NyIHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtaW4taGVpZ2h0OiAxMHJlbTtcbn1cbi50ZXh0a2V5IHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAzcmVtO1xufVxuLnN1Ym1pdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGFpblRleHRFcnJvciB7XG4gIGJvcmRlcjogMC4wOXJlbSBzb2xpZCAjZjMzNjIwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZWMyNTBkO1xufVxuIl19 */"]
  });
  return RabinCipherComponent;
})();

/***/ }),

/***/ 20908:
/*!********************************************************!*\
  !*** ./src/app/pages/rsacipher/rsacipher.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RSACipherComponent": () => (/* binding */ RSACipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/correct-key.directive */ 5975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function RSACipherComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function RSACipherComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function RSACipherComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function RSACipherComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function RSACipherComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function RSACipherComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" (", ctx_r5.N.value, ", ", ctx_r5.E.value, ") ");
  }
}

function RSACipherComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Not set. ");
  }
}

function RSACipherComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" (", ctx_r8.N.value, ", ", ctx_r8.D.value, ") ");
  }
}

function RSACipherComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Not set. ");
  }
}

function RSACipherComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 22)(2, "div")(3, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 22)(6, "blockquote")(7, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r11.resposeDymcMess, " text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.cipherText, " ");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let RSACipherComponent = /*#__PURE__*/(() => {
  class RSACipherComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
        P: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[0-9]\d*$/), (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.isPrimeVal)()]),
        Q: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[0-9]\d*$/), (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.isPrimeVal)()]),
        E: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        D: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        N: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
      });
      this.cipherText = "";
      this.submitted = false;
      this.resposeDymcMess = "";
      this.isRandomKey = false;
    }

    ngOnInit() {}

    random() {
      this.connection.RSAGetKeys().subscribe(ansKeys => {
        console.log(ansKeys);
        this.arguments.patchValue({
          P: ansKeys.privateKey.P,
          Q: ansKeys.privateKey.Q,
          E: ansKeys.privateKey.E,
          D: ansKeys.privateKey.D,
          N: ansKeys.privateKey.N
        });
        this.isRandomKey = true;
      });
    }

    calculeND() {
      if (!this.P.invalid && !this.Q.invalid && !this.E.invalid) {
        this.connection.RSAGetND(this.P.value, this.Q.value, this.E.value).subscribe(ans => {
          this.arguments.patchValue({
            D: ans.D,
            N: ans.N
          });
        });
      }
    }

    encrypt() {
      let publicKey = {
        N: this.N.value,
        E: this.E.value
      };
      this.connection.RSAEncrypt(publicKey, this.arguments.get("plainText").value).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.resposeDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      let privateKey = {
        N: this.N.value,
        D: this.D.value
      };
      this.connection.RSADecrypt(privateKey, this.arguments.get("plainText").value).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }

        this.submitted = true;
      });
    }

    get P() {
      return this.arguments.get("P");
    }

    get Q() {
      return this.arguments.get("Q");
    }

    get E() {
      return this.arguments.get("E");
    }

    get D() {
      return this.arguments.get("D");
    }

    get N() {
      return this.arguments.get("N");
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

  }

  RSACipherComponent.ɵfac = function RSACipherComponent_Factory(t) {
    return new (t || RSACipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__.NormalizerService));
  };

  RSACipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RSACipherComponent,
    selectors: [["app-rsacipher"]],
    decls: 56,
    vars: 21,
    consts: [[3, "formGroup"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-11", "col-lg-11", "mr-auto", "ml-auto"], [1, "col-sm-1", "col-lg-1", "mr-auto", "ml-auto"], [1, "col-sm-6", "col-lg-6", "ml-auto"], [3, "ngClass"], ["placeholder", "P", "type", "text", "autofocus", "", "formControlName", "P", 1, "form-control", 3, "input"], [3, "ngIf"], ["placeholder", "Q", "type", "text", "autofocus", "", "formControlName", "Q", 1, "form-control", 3, "input"], [1, "row", "justify-content-center", "ND-box"], [1, "row"], [1, "col-sm-12", "col-lg-12", "ml-auto", 2, "margin-bottom", "5px"], ["placeholder", "E", "type", "text", "autofocus", "", "formControlName", "E", 1, "form-control", 3, "input"], ["placeholder", "N", "type", "text", "autofocus", "", "formControlName", "N", 1, "form-control"], ["placeholder", "D", "type", "text", "autofocus", "", "formControlName", "D", 1, "form-control"], [1, "col-md-6"], [4, "ngIf", "ngIfElse"], ["elsePubK", ""], ["elsePrvK", ""], [1, "col-sm-12", "col-lg-12", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "input-group-append"], [1, "input-group-text"], [1, "tim-icons", "icon-lock-circle"], [1, "mb-3"], [1, "blockquote", "blockquote-danger"]],
    template: function RSACipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "div", 5)(7, "div", 6)(8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RSACipherComponent_Template_input_input_8_listener() {
          return ctx.calculeND();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RSACipherComponent_ng_template_9_Template, 3, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5)(11, "div", 6)(12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RSACipherComponent_Template_input_input_12_listener() {
          return ctx.calculeND();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, RSACipherComponent_ng_template_13_Template, 3, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 6)(18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RSACipherComponent_Template_input_input_18_listener() {
          return ctx.calculeND();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, RSACipherComponent_ng_template_19_Template, 3, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11)(21, "div", 5)(22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, RSACipherComponent_ng_template_24_Template, 3, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 5)(26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, RSACipherComponent_ng_template_28_Template, 3, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 11)(30, "div", 16)(31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Public Key (n,e): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, RSACipherComponent_div_33_Template, 2, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, RSACipherComponent_ng_template_34_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 16)(37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Private Key (n,d): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, RSACipherComponent_div_39_Template, 2, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, RSACipherComponent_ng_template_40_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 11)(43, "div", 20)(44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RSACipherComponent_Template_button_click_44_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 11)(47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 24)(50, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RSACipherComponent_Template_button_click_50_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 24)(53, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RSACipherComponent_Template_button_click_53_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, RSACipherComponent_div_55_Template, 9, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](35);

        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.P.invalid && ctx.P.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.P.invalid || !ctx.P.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Q.invalid && ctx.Q.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.Q.invalid || !ctx.Q.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.E.invalid && ctx.E.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.E.invalid || !ctx.E.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.N.invalid && ctx.N.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.N.invalid || !ctx.N.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.D.invalid && ctx.D.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.D.invalid || !ctx.D.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.N.value.length != 0 && ctx.E.value.length != 0)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.N.value.length != 0 && ctx.D.value.length != 0)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n\n.ND-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid #fd5d93;\n  margin-bottom: 10px;\n}\n\n.ND-box[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .ND-box[_ngcontent-%COMP%]   .form-grou[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJzYWNpcGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFMRTtFQUNFLGtCQUFBO0FBT0oiLCJmaWxlIjoicnNhY2lwaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmRvbS1idG4tY29udCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5yYW5kb20tYnRuIHtcbiAgICBtYXJnaW46IDAlO1xuICB9XG4gIC50ZXhydG9jciB7XG4gICAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTcxOTQxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gICAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xuICB9XG4gIC5zdWJtaXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucGxhaW5UZXh0RXJyb3Ige1xuICAgIGJvcmRlcjogMC4wOXJlbSBzb2xpZCAjZjMzNjIwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNlYzI1MGQ7XG4gIH1cbi5ORC1ib3h7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDVkOTM7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC5pbnB1dC1ncm91cCwgLmZvcm0tZ3JvdXtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn0iXX0= */"]
  });
  return RSACipherComponent;
})();

/***/ }),

/***/ 77669:
/*!******************************************************!*\
  !*** ./src/app/pages/services/connection.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionService": () => (/* binding */ ConnectionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





let ConnectionService = /*#__PURE__*/(() => {
  class ConnectionService {
    constructor(http) {
      this.http = http;
      this.type = null;
      this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.endpoint;
    }

    handleError(error) {
      console.log(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)("Error! something went wrong. >:v");
    } //shift


    shiftEncrypt(key, plainText) {
      return this.http.get(this.baseUrl + `/shift/encrypt?key=${key}&plainText=${plainText}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    shiftDecrypt(key, cipherText) {
      return this.http.get(this.baseUrl + `/shift/decrypt?key=${key}&cipherText=${cipherText}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    shiftAttack(cipherText) {
      return this.http.get(this.baseUrl + `/shift/attack?cipherText=${cipherText}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } //affine


    affineEncrypt(keys, plainText) {
      return this.http.post(this.baseUrl + "/affine/encrypt", {
        key: keys,
        plainText: plainText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    affineDecrypt(keys, cipherText) {
      return this.http.post(this.baseUrl + "/affine/decrypt", {
        key: keys,
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    affineAttack(cipherText) {
      return this.http.post(this.baseUrl + "/affine/attack", {
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } //substitution


    substitutionEncrypt(key, plainText) {
      return this.http.post(this.baseUrl + "/substitution/encrypt", {
        key: key,
        plainText: plainText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    substitutionDecrypt(key, cipherText) {
      return this.http.post(this.baseUrl + "/substitution/decrypt", {
        key: key,
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    substitutionAttack(cipherText) {
      return this.http.post(this.baseUrl + "/substitution/attack", {
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } //vigenere


    vigenereEncrypt(key, plainText) {
      return this.http.post(this.baseUrl + "/vigenere/encrypt", {
        key: key,
        plainText: plainText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    vigenereDecrypt(key, cipherText) {
      return this.http.post(this.baseUrl + "/vigenere/decrypt", {
        key: key,
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    vigenereKeyAttack(keySize, cipherText) {
      return this.http.post(this.baseUrl + "/vigenere/attack/key", {
        keySize: keySize,
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    vigenereNoKeyAttack(cipherText) {
      return this.http.post(this.baseUrl + "/vigenere/attack/nokey", {
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } // permutation


    permutationEncrypt(key, plainText) {
      return this.http.post(this.baseUrl + "/permutation/encrypt", {
        key: key,
        plainText: plainText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    permutationDecrypt(key, cipherText) {
      return this.http.post(this.baseUrl + "/permutation/decrypt", {
        key: key,
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } // hill


    hillEncrypt(value) {
      return this.http.post(this.baseUrl + "/hill/encrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    hillDecrypt(value) {
      return this.http.post(this.baseUrl + "/hill/decrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    hillAttack(cipherText, plainText, matrixSize) {
      return this.http.post(this.baseUrl + "/hill/attack", {
        matrixSize: matrixSize,
        plainText: plainText,
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } // triple des


    tripleDesEncrypt(value) {
      return this.http.post(this.baseUrl + "/triple_des/encrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    tripleDesDecrypt(value) {
      return this.http.post(this.baseUrl + "/triple_des/decrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } // aes


    aesEncrypt(value) {
      return this.http.post(this.baseUrl + "/aes/encrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    aesDecrypt(value) {
      return this.http.post(this.baseUrl + "/aes/decrypt", value, {
        reportProgress: true,
        observe: "events",
        responseType: "blob"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } // simplified des


    simplifiedDesEncrypt(key, plainText) {
      return this.http.post(this.baseUrl + "/simplified_des/encrypt", {
        key: key,
        plainText: plainText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    simplifiedDesDecrypt(key, cipherText) {
      return this.http.post(this.baseUrl + "/simplified_des/decrypt", {
        key: key,
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } // gamma


    gammaEncrypt(permutation, x, y, plainText) {
      return this.http.post(this.baseUrl + "/gammap/encrypt", {
        permutation: permutation,
        plainText: plainText,
        x_0: x,
        y_0: y
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    gammaDecrypt(permutation, x, y, cipherText) {
      return this.http.post(this.baseUrl + "/gammap/decrypt", {
        permutation: permutation,
        cipherText: cipherText,
        x_0: x,
        y_0: y
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } //RSA


    RSAEncrypt(key, plainText) {
      return this.http.post(this.baseUrl + "/rsa/encrypt", {
        plainText: plainText,
        N: key.N,
        E: key.E
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    RSADecrypt(key, cipherText) {
      return this.http.post(this.baseUrl + "/rsa/decrypt", {
        cipherText: cipherText,
        N: key.N,
        D: key.D
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    RSAGetKeys() {
      return this.http.get(this.baseUrl + "/rsa/getKeys").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } // Rabin


    rabinEncrypt(n, plainText) {
      return this.http.post(this.baseUrl + "/rabin/encrypt", {
        n: n,
        plainText: plainText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    rabinDecrypt(p, q, cipherText) {
      return this.http.post(this.baseUrl + "/rabin/decrypt", {
        p: p,
        q: q,
        cipherText: cipherText
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    rabinGetKeys() {
      return this.http.get(this.baseUrl + "/rabin/getKeys").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    RSAGetND(P, Q, E) {
      return this.http.get(this.baseUrl + `/rsa/getND?P=${P}&Q=${Q}&E=${E}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } //ELGamal


    ElGamalEncrypt(key, plainText) {
      return this.http.post(this.baseUrl + "/elgamal/encrypt", {
        plainText: plainText,
        P: key.P,
        G: key.G,
        H: key.H
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    ElGamalDecrypt(key, cipherText) {
      return this.http.post(this.baseUrl + "/elgamal/decrypt", {
        cipherText: cipherText,
        P: key.P,
        G: key.G,
        X: key.X
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    ElGamalGetKeys() {
      return this.http.get(this.baseUrl + '/elgamal/getKeys').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    } //ELGamalElip


    ElGamalElipEncrypt(key, plainText) {
      return this.http.post(this.baseUrl + "/gammaleip/encrypt", {
        plainText: plainText,
        Pk: key.Pk
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    ElGamalElipDecrypt(key, cipherText) {
      return this.http.post(this.baseUrl + "/gammaleip/decrypt", {
        cipherText: cipherText,
        X: key.X,
        Y: key.Y,
        Pk: key.Pk
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

    ElGamalElipGetKeys() {
      return this.http.get(this.baseUrl + '/gammaleip/getKeys').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }

  }

  ConnectionService.ɵfac = function ConnectionService_Factory(t) {
    return new (t || ConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };

  ConnectionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ConnectionService,
    factory: ConnectionService.ɵfac,
    providedIn: "root"
  });
  return ConnectionService;
})();

/***/ }),

/***/ 62615:
/*!******************************************************!*\
  !*** ./src/app/pages/services/normalizer.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NormalizerService": () => (/* binding */ NormalizerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

let NormalizerService = /*#__PURE__*/(() => {
  class NormalizerService {
    constructor() {}

    setplainText(plainText) {
      return plainText.replace(/ /g, "").toLocaleLowerCase();
    }

    setcipherText(cipherText) {
      return cipherText.replace(/ /g, "").toLocaleUpperCase();
    }

  }

  NormalizerService.ɵfac = function NormalizerService_Factory(t) {
    return new (t || NormalizerService)();
  };

  NormalizerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NormalizerService,
    factory: NormalizerService.ɵfac,
    providedIn: "root"
  });
  return NormalizerService;
})();

/***/ }),

/***/ 5975:
/*!*******************************************************!*\
  !*** ./src/app/pages/shared/correct-key.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "correctFistKeyAffine": () => (/* binding */ correctFistKeyAffine),
/* harmony export */   "correctKey": () => (/* binding */ correctKey),
/* harmony export */   "correctKeyHill": () => (/* binding */ correctKeyHill),
/* harmony export */   "isPermutationAbc": () => (/* binding */ isPermutationAbc),
/* harmony export */   "isPermutationNum": () => (/* binding */ isPermutationNum),
/* harmony export */   "isPrimeVal": () => (/* binding */ isPrimeVal)
/* harmony export */ });
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mathjs */ 10889);

function correctKey(allowedLengths, min, max) {
  return control => {
    const valueInpt = control.value;
    return !verifyStructure(valueInpt.split(","), min, max, allowedLengths) ? {
      incorrectKey: {
        value: valueInpt
      }
    } : null;
  };
}

function verifyStructure(arrInpt, min, max, allowedLengths) {
  if (!allowedLengths.includes(arrInpt.length)) {
    return false;
  }

  for (let i = 0; i < arrInpt.length; i++) {
    if (!isInt(arrInpt[i])) {
      return false;
    }

    const elm = parseInt(arrInpt[i]);

    if (elm < min || elm > max) {
      return false;
    }
  }

  return true;
}

function isInt(inpt) {
  let regexp = new RegExp(/^[0-9]\d*$/);
  return regexp.test(inpt);
}

function correctFistKeyAffine() {
  return control => {
    const fistKey = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
    const fistKeyInpt = control.value.split(",")[0];
    return !isInt(fistKeyInpt) || !fistKey.includes(parseInt(fistKeyInpt)) ? {
      incorrectKey: {
        value: fistKeyInpt
      }
    } : null;
  };
}
function isPermutationAbc(Zn) {
  return control => {
    let setNum = new Set();
    control.value.split("").forEach(element => {
      setNum.add(element);
    });
    return setNum.size != Zn || !setNum.has("Z") ? {
      incorrectKey: {
        value: control.value
      }
    } : null;
  };
}
function isPermutationNum() {
  return control => {
    let setNum = new Set();
    control.value.split(",").forEach(element => {
      setNum.add(element);
    });
    console.log(setNum.size, control.value.split(",").length, setNum.has(control.value.split(",").length.toString()));
    let flag = false;
    let i = 1;
    let top = setNum.size + 1;

    if (setNum.has("0")) {
      i = 0;
      top -= 1;
    }

    for (i; i < top; i++) {
      if (!setNum.has(i.toString())) {
        flag = true;
        break;
      }
    }

    return flag ? {
      incorrectKey: {
        value: control.value
      }
    } : null;
  };
}
function correctKeyHill() {
  return control => {
    let mtx = control.value.split(",").map(Number);
    return !checkDiv(calDet(mtx)) ? {
      incorrectKey: {
        value: control.value
      }
    } : null;
  };
}

function calDet(mtx) {
  let n = Math.sqrt(mtx.length);

  if (!isInt(n.toString())) {
    return 0;
  }

  let auxMax = new Array(n);

  for (var i = 0; i < n; i++) {
    auxMax[i] = new Array(n);
  }

  if (n != 1) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        auxMax[i][j] = mtx[i * n + j];
      }
    }
  } else {
    return 0;
  }

  console.log(mathjs__WEBPACK_IMPORTED_MODULE_0__.det(auxMax));
  return mathjs__WEBPACK_IMPORTED_MODULE_0__.det(auxMax);
}

function checkDiv(det) {
  return det % 2 == 0 ? false : true;
}

function isPrimeVal() {
  return control => {
    return !isPrime(control.value, 4) ? {
      incorrectKey: {
        value: control.value
      }
    } : null;
  };
}

function powerModP(x, y, p) {
  x = BigInt(x);
  y = BigInt(y);
  p = BigInt(p);
  let res = 1n;
  x = x % p;

  while (y > 0) {
    // If y is odd, multiply
    // x with result
    if (y & 1n) {
      res = res * x % p;
    }

    y = y >> 1n; // y = y/2

    x = x * x % p;
  }

  return res;
}

function miillerTest(d, n) {
  let a = 2n + BigInt(Math.floor(Math.random() * Number(n - 2n)));
  let x = powerModP(a, d, n);
  if (x == 1n || x == n - 1n) return true;

  while (d != n - 1n) {
    x = x * x % n;
    d *= 2n;

    if (x == 1n) {
      console.log(d);
      return false;
    }

    if (x == n - 1n) return true;
  }

  return false;
}

function isPrime(n, k) {
  if (!isInt(n)) return false;
  n = BigInt(n);
  if (n <= 1 || n == 4) return false;
  if (n <= 3) return true;
  let d = n - 1n;

  while (d % 2n == 0n) d /= 2n;

  for (let i = 0; i < k; i++) if (!miillerTest(d, n)) {
    console.log("k: ", i);
    return false;
  }

  return true;
}

/***/ }),

/***/ 32439:
/*!**************************************************************!*\
  !*** ./src/app/pages/shift-cipher/shift-cipher.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftCipherComponent": () => (/* binding */ ShiftCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/correct-key.directive */ 5975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function ShiftCipherComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function ShiftCipherComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div")(3, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 10)(6, "blockquote")(7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.resposeDymcMess, " text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.cipherText, " ");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let ShiftCipherComponent = /*#__PURE__*/(() => {
  class ShiftCipherComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.correctKey)([1], 0, 25)]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$")])
      });
      this.cipherText = "";
      this.submitted = false;
      this.resposeDymcMess = "";
    }

    ngOnInit() {}

    random() {
      this.arguments.patchValue({
        key: Math.floor(Math.random() * 25).toString()
      });
    }

    encrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      this.connection.shiftEncrypt(this.arguments.get("key").value, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.resposeDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      this.connection.shiftDecrypt(this.arguments.get("key").value, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }

        this.submitted = true;
      });
    }

    get key() {
      return this.arguments.get("key");
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

  }

  ShiftCipherComponent.ɵfac = function ShiftCipherComponent_Factory(t) {
    return new (t || ShiftCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__.NormalizerService));
  };

  ShiftCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ShiftCipherComponent,
    selectors: [["app-shift-cipher"]],
    decls: 20,
    vars: 9,
    consts: [[3, "formGroup"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-lg-6", "ml-auto"], [3, "ngClass"], ["placeholder", "Key", "type", "text", "autofocus", "", "formControlName", "key", 1, "form-control"], [3, "ngIf"], [1, "col-sm-3", "col-lg-3", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "input-group-append"], [1, "input-group-text"], [1, "tim-icons", "icon-lock-circle"], [1, "mb-3"], [1, "blockquote", "blockquote-danger"]],
    template: function ShiftCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ShiftCipherComponent_ng_template_6_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShiftCipherComponent_Template_button_click_8_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShiftCipherComponent_Template_button_click_14_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12)(17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShiftCipherComponent_Template_button_click_17_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ShiftCipherComponent_div_19_Template, 9, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.key.invalid && ctx.key.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.key.invalid || !ctx.key.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaWZ0LWNpcGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7QUFLRiIsImZpbGUiOiJzaGlmdC1jaXBoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuZG9tLWJ0bi1jb250IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJhbmRvbS1idG4ge1xuICBtYXJnaW46IDAlO1xufVxuLnRleHJ0b2NyIHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtaW4taGVpZ2h0OiAxMHJlbTtcbn1cbi5zdWJtaXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxhaW5UZXh0RXJyb3Ige1xuICBib3JkZXI6IDAuMDlyZW0gc29saWQgI2YzMzYyMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VjMjUwZDtcbn1cbiJdfQ== */"]
  });
  return ShiftCipherComponent;
})();

/***/ }),

/***/ 18313:
/*!********************************************************************************!*\
  !*** ./src/app/pages/simplified-des-cipher/simplified-des-cipher.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplifiedDesCipherComponent": () => (/* binding */ SimplifiedDesCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);






function SimplifiedDesCipherComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Key can't be empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function SimplifiedDesCipherComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Key must be 10 bits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function SimplifiedDesCipherComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SimplifiedDesCipherComponent_div_10_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SimplifiedDesCipherComponent_div_10_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.key.errors == null ? null : ctx_r1.key.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.key.errors == null ? null : ctx_r1.key.errors.pattern);
  }
}

function SimplifiedDesCipherComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Plain/Cipher text can't be empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function SimplifiedDesCipherComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Plain/Cipher text can only contain base64 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function SimplifiedDesCipherComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SimplifiedDesCipherComponent_div_21_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SimplifiedDesCipherComponent_div_21_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.plainText.errors == null ? null : ctx_r2.plainText.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.plainText.errors == null ? null : ctx_r2.plainText.errors.pattern);
  }
}

function SimplifiedDesCipherComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 21)(2, "div")(3, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21)(6, "blockquote")(7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.responseDymcMess, " text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.cipherText, " ");
  }
}

let SimplifiedDesCipherComponent = /*#__PURE__*/(() => {
  class SimplifiedDesCipherComponent {
    constructor(connection) {
      this.connection = connection;
      this.cipherText = "";
      this.submitted = false;
      this.responseDymcMess = "";
    }

    ngOnInit() {
      this.cipherParams = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("0110010110", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("(0|1){10}")]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("attack at dawn", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("[+/=0-9a-zA-Z][ +/=0-9a-zA-Z]*")])
      });
    }

    get key() {
      return this.cipherParams.get("key");
    }

    get plainText() {
      return this.cipherParams.get("plainText");
    }

    random() {
      let result = [];

      for (let n = 0; n < 10; n++) {
        result.push(Math.floor(Math.random() * 2));
      }

      this.key.setValue(result.join(""));
    }

    encrypt() {
      this.connection.simplifiedDesEncrypt(this.key.value, this.plainText.value.replace(/ /g, "")).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.responseDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      this.connection.simplifiedDesDecrypt(this.key.value, this.plainText.value).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.responseDymcMess = "Decipher";
        }

        this.submitted = true;
      });
    }

  }

  SimplifiedDesCipherComponent.ɵfac = function SimplifiedDesCipherComponent_Factory(t) {
    return new (t || SimplifiedDesCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionService));
  };

  SimplifiedDesCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SimplifiedDesCipherComponent,
    selectors: [["app-simplified-des-cipher"]],
    decls: 30,
    vars: 14,
    consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-9", 3, "formGroup"], ["formDir", "ngForm"], ["for", "key"], [1, "form-row"], [1, "col-sm-9", "col-lg-9", "mr-auto"], [1, "form-group"], ["type", "text", "formControlName", "key", "id", "key", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-3", "col-lg-3", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "row"], [1, "form-group", "col-md-12"], ["for", "plainText"], ["id", "plainText", "formControlName", "plainText", "rows", "4", "required", "", 1, "form-control", 2, "max-height", "150px"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], [1, "mb-3"], [1, "blockquote", "blockquote-danger"]],
    template: function SimplifiedDesCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2, 3)(4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SimplifiedDesCipherComponent_div_10_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimplifiedDesCipherComponent_Template_button_click_12_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Random Key ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Plain/Cipher Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SimplifiedDesCipherComponent_div_21_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12)(23, "div", 16)(24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimplifiedDesCipherComponent_Template_button_click_24_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimplifiedDesCipherComponent_Template_button_click_27_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SimplifiedDesCipherComponent_div_29_Template, 9, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.cipherParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-success", ctx.key.valid && ctx.key.touched)("has-danger", ctx.key.invalid && ctx.key.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.key.invalid && ctx.key.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-success", ctx.plainText.valid && ctx.plainText.touched)("has-danger", ctx.plainText.invalid && ctx.plainText.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.plainText.invalid && ctx.plainText.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.cipherParams.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.cipherParams.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.addResourcesS[_ngcontent-%COMP%] {\n  font-size: 38px;\n  color: #454880;\n  border: 2px dashed #454880;\n  border-radius: 10px;\n  display: inline-block;\n  padding: 2rem 5rem;\n}\n\n#file[_ngcontent-%COMP%] {\n  max-width: 300px;\n  height: auto;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: #171941;\n}\n\n.random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsaWZpZWQtZGVzLWNpcGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0FBTUY7O0FBSkE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFPRjs7QUFMQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtBQVNGOztBQVBBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0FBVUYiLCJmaWxlIjoic2ltcGxpZmllZC1kZXMtY2lwaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmRvbS1idG4tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYW5kb20tYnRuIHtcbiAgbWFyZ2luOiAwJTtcbn1cbi50ZXhydG9jciB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG59XG4udGV4dGtleSB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LWhlaWdodDogM3JlbTtcbn1cbi5hZGRSZXNvdXJjZXNTIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBjb2xvcjogIzQ1NDg4MDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICM0NTQ4ODA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xufVxuXG4jZmlsZSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xufVxuXG4ucmFuZG9tLWJ0bi1jb250IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJhbmRvbS1idG4ge1xuICBtYXJnaW46IDAlO1xufVxuLnRleHJ0b2NyIHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtaW4taGVpZ2h0OiAxMHJlbTtcbn1cbi50ZXh0a2V5IHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAzcmVtO1xufVxuLnN1Ym1pdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGFpblRleHRFcnJvciB7XG4gIGJvcmRlcjogMC4wOXJlbSBzb2xpZCAjZjMzNjIwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZWMyNTBkO1xufVxuIl19 */"]
  });
  return SimplifiedDesCipherComponent;
})();

/***/ }),

/***/ 64887:
/*!******************************************************************************!*\
  !*** ./src/app/pages/squares-presentation/squares-presentation.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SquaresPresentationComponent": () => (/* binding */ SquaresPresentationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

let SquaresPresentationComponent = /*#__PURE__*/(() => {
  class SquaresPresentationComponent {
    constructor() {}

    ngOnInit() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("index-page");
    }

    ngOnDestroy() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("index-page");
    }

  }

  SquaresPresentationComponent.ɵfac = function SquaresPresentationComponent_Factory(t) {
    return new (t || SquaresPresentationComponent)();
  };

  SquaresPresentationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SquaresPresentationComponent,
    selectors: [["app-squares-presentation"]],
    decls: 15,
    vars: 0,
    consts: [[1, "wrapper"], [1, "page-header", "header-filter"], [1, "squares", "square1"], [1, "squares", "square2"], [1, "squares", "square3"], [1, "squares", "square4"], [1, "squares", "square5"], [1, "squares", "square6"], [1, "squares", "square7"], [1, "container"], [1, "content-center", "brand"], [1, "h1-seo"]],
    template: function SquaresPresentationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u2203nigma\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Select a block cipher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    encapsulation: 2
  });
  return SquaresPresentationComponent;
})();

/***/ }),

/***/ 298:
/*!****************************************************************************!*\
  !*** ./src/app/pages/substitution-cipher/substitution-cipher.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubstitutionCipherComponent": () => (/* binding */ SubstitutionCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/correct-key.directive */ 5975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function SubstitutionCipherComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div")(3, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9)(6, "blockquote")(7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.resposeDymcMess, " text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.cipherText, " ");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let SubstitutionCipherComponent = /*#__PURE__*/(() => {
  class SubstitutionCipherComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[A-Z]*$"), (0,_shared_correct_key_directive__WEBPACK_IMPORTED_MODULE_0__.isPermutationAbc)(26)]),
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$")])
      });
      this.cipherText = "";
      this.submitted = false;
      this.resposeDymcMess = "";
    }

    ngOnInit() {}

    random() {
      let arrBase = Array.from({
        length: 26
      }, (_, i) => i);
      let key = "";
      let inx, aux;

      for (let i = 0; i < 26; i++) {
        inx = Math.floor(Math.random() * 25);
        aux = arrBase[inx];
        arrBase[inx] = arrBase[i];
        arrBase[i] = aux;
      }

      arrBase.forEach(element => {
        key += String.fromCharCode(65 + element);
      });
      this.arguments.patchValue({
        key: key
      });
      console.log(this.arguments.get("key").errors);
    }

    encrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      this.connection.substitutionEncrypt(this.arguments.get("key").value, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.resposeDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      this.connection.substitutionDecrypt(this.arguments.get("key").value, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }

        this.submitted = true;
      });
    }

    get key() {
      return this.arguments.get("key");
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

    forceUpperCase() {
      this.arguments.patchValue({
        key: this.arguments.get("key").value.toUpperCase()
      });
    }

  }

  SubstitutionCipherComponent.ɵfac = function SubstitutionCipherComponent_Factory(t) {
    return new (t || SubstitutionCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_2__.NormalizerService));
  };

  SubstitutionCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SubstitutionCipherComponent,
    selectors: [["app-substitution-cipher"]],
    decls: 19,
    vars: 11,
    consts: [[3, "formGroup"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-lg-6", "ml-auto"], [3, "ngClass"], ["placeholder", "Key", "formControlName", "key", 1, "textkey", "form-control", 3, "ngClass", "keyUP"], [1, "col-sm-3", "col-lg-3", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "mb-3"], [1, "blockquote", "blockquote-danger"]],
    template: function SubstitutionCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyUP", function SubstitutionCipherComponent_Template_textarea_keyUP_5_listener() {
          return ctx.forceUpperCase();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionCipherComponent_Template_button_click_7_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionCipherComponent_Template_button_click_13_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubstitutionCipherComponent_Template_button_click_16_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SubstitutionCipherComponent_div_18_Template, 9, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.key.invalid && ctx.key.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx.key.invalid && ctx.key.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnN0aXR1dGlvbi1jaXBoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtBQU1GIiwiZmlsZSI6InN1YnN0aXR1dGlvbi1jaXBoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuZG9tLWJ0bi1jb250IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJhbmRvbS1idG4ge1xuICBtYXJnaW46IDAlO1xufVxuLnRleHJ0b2NyIHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtaW4taGVpZ2h0OiAxMHJlbTtcbn1cbi50ZXh0a2V5IHtcbiAgYm9yZGVyOiAxZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTk0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mjg1cmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAzcmVtO1xufVxuLnN1Ym1pdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGFpblRleHRFcnJvciB7XG4gIGJvcmRlcjogMC4wOXJlbSBzb2xpZCAjZjMzNjIwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZWMyNTBkO1xufVxuIl19 */"]
  });
  return SubstitutionCipherComponent;
})();

/***/ }),

/***/ 82402:
/*!****************************************************!*\
  !*** ./src/app/pages/top-bar/top-bar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 15896);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 78539);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 47273);






const _c0 = function () {
  return ["/cipher"];
};

const _c1 = function () {
  return ["/attack"];
};

function TopBarComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Documentation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Encrypt & Decrypt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Attack ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1));
  }
}

const _c2 = function () {
  return ["/"];
};

let TopBarComponent = /*#__PURE__*/(() => {
  class TopBarComponent {
    constructor() {
      this.isCollapsed = true;
    }

  }

  TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
    return new (t || TopBarComponent)();
  };

  TopBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: TopBarComponent,
    selectors: [["app-top-bar"]],
    decls: 31,
    vars: 5,
    consts: [["color-on-scroll", "100", "id", "navbar-top", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], ["placement", "bottom", 1, "navbar-brand", 3, "routerLink"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "navbar-toggler", 3, "click"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "navbar-collapse", "justify-content-end", 3, "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "tim-icons", "icon-simple-remove"], [1, "navbar-nav"], [1, "nav-item", "p-0"], ["href", "https://github.com/DavidFM43/colossus", "placement", "bottom", "target", "_blank", "tooltip", "Checkout our GitHub repository", 1, "nav-link"], [1, "fa-brands", "fa-github"], [1, "d-lg-none", "d-xl-none"], ["dropdown", "", 1, "dropdown", "nav-item"], ["data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:void(0)", 1, "dropdown-toggle", "nav-link", "dropdown-toggle"], [1, "fa", "fa-cogs", "d-lg-none", "d-xl-none"], ["class", "dropdown-menu dropdown-with-icons", 4, "dropdownMenu"], [1, "dropdown-menu", "dropdown-with-icons"], ["href", "https://demos.creative-tim.com/blk-design-system-angular/#/documentation/overview", 1, "dropdown-item"], [1, "tim-icons", "icon-paper"], [1, "dropdown-item", 3, "routerLink"], [1, "fa-solid", "fa-lock"], [1, "fa-solid", "fa-bolt"]],
    template: function TopBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u2203nigma \u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Encryption Tool ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_7_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 5)(9, "span", 6)(10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " \u2203nigma \u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_18_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ul", 15)(21, "li", 16)(22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 20)(27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Getting started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, TopBarComponent_div_30_Template, 10, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownDirective, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseDirective],
    encapsulation: 2
  });
  return TopBarComponent;
})();

/***/ }),

/***/ 63457:
/*!************************************************************************!*\
  !*** ./src/app/pages/triple-des-cipher/triple-des-cipher.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripleDesCipherComponent": () => (/* binding */ TripleDesCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function TripleDesCipherComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Key can't be empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function TripleDesCipherComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Key must be 16/24 bytes in hexadecimal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function TripleDesCipherComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TripleDesCipherComponent_div_10_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TripleDesCipherComponent_div_10_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.key.errors == null ? null : ctx_r1.key.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.key.errors == null ? null : ctx_r1.key.errors.pattern);
  }
}

function TripleDesCipherComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const m_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", m_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r13);
  }
}

function TripleDesCipherComponent_div_21_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Initialization vector can't be empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function TripleDesCipherComponent_div_21_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Initialization vector must be 16 bytes in hexadecimal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function TripleDesCipherComponent_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TripleDesCipherComponent_div_21_div_7_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TripleDesCipherComponent_div_21_div_7_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.initializationVector.errors == null ? null : ctx_r14.initializationVector.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.initializationVector.errors == null ? null : ctx_r14.initializationVector.errors.pattern);
  }
}

function TripleDesCipherComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 30)(3, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "IV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TripleDesCipherComponent_div_21_div_7_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-success", ctx_r3.initializationVector.valid && ctx_r3.initializationVector.touched)("has-danger", ctx_r3.initializationVector.invalid && ctx_r3.initializationVector.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.initializationVector.invalid && ctx_r3.initializationVector.dirty);
  }
}

function TripleDesCipherComponent_div_22_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Counter can't be empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function TripleDesCipherComponent_div_22_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Counter must be 16 bytes in hexadecimal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function TripleDesCipherComponent_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TripleDesCipherComponent_div_22_div_7_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TripleDesCipherComponent_div_22_div_7_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.counter.errors == null ? null : ctx_r17.counter.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.counter.errors == null ? null : ctx_r17.counter.errors.pattern);
  }
}

function TripleDesCipherComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 30)(3, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Counter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TripleDesCipherComponent_div_22_div_7_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-success", ctx_r4.counter.valid && ctx_r4.counter.touched)("has-danger", ctx_r4.counter.invalid && ctx_r4.counter.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.counter.invalid && ctx_r4.counter.dirty);
  }
}

function TripleDesCipherComponent_ng_container_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Image name can not have points(.). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function TripleDesCipherComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 35)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TripleDesCipherComponent_ng_container_28_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.addFileGroup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TripleDesCipherComponent_ng_container_28_div_5_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.notAdmit);
  }
}

function TripleDesCipherComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripleDesCipherComponent_ng_template_29_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.removeFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}

function TripleDesCipherComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.progress, " ");
  }
}

function TripleDesCipherComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ups, intente otra vez.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function TripleDesCipherComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 18)(2, "div")(3, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r10.responseDymcMess, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r10.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}

let TripleDesCipherComponent = /*#__PURE__*/(() => {
  class TripleDesCipherComponent {
    constructor(connection, domS) {
      this.connection = connection;
      this.domS = domS;
      this.modes = ["ECB", "CBC", "OFB", "CFB", "CTR"];
      this.ivModes = ["CBC", "OFB", "CFB"];
      this.file = null;
      this.fileUrl = null;
      this.notAdmit = false;
      this.sending = false;
      this.errorUpload = false;
      this.progress = "";
      this.encrypted = false;
      this.responseDymcMess = "";
    }

    ngOnInit() {
      this.cipherParams = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("AA 07 63 77 AE 1B 8E A6 B7 42 01 59 0B 2C B8 14", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("([0-9A-F]{2} ){15}(([0-9A-F]{2} ){8})?[0-9A-F]{2}")]),
        mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("ECB", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        initializationVector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("C0 93 86 36 11 F7 41 A7", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("([0-9A-F]{2} ){7}[0-9A-F]{2}")]),
        counter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl("D4 68 48 C7 A1 44 32 D9", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("([0-9A-F]{2} ){7}[0-9A-F]{2}")])
      });
    }

    get key() {
      return this.cipherParams.get("key");
    }

    get mode() {
      return this.cipherParams.get("mode");
    }

    get initializationVector() {
      return this.cipherParams.get("initializationVector");
    }

    get counter() {
      return this.cipherParams.get("counter");
    }

    random() {
      let result = [];
      let hexRef = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

      for (let n = 0; n < 24; n++) {
        let hex = [hexRef[Math.floor(Math.random() * 16)], hexRef[Math.floor(Math.random() * 16)]].join("");
        result.push(hex);
      }

      this.key.setValue(result.join(" "));
    }

    submit() {}

    addFileGroup(event) {
      /*
       * Adds image file from selection, only admits valid image file types
       */
      let auxType;
      this.encrypted = false;
      auxType = event.target.files[0].name.substring(event.target.files[0].name.indexOf(".")).toLowerCase();

      if (auxType === ".png" || auxType === ".jpeg" || auxType === ".jpg") {
        this.file = event.target.files[0];
        this.fileUrl = this.domS.bypassSecurityTrustResourceUrl(URL.createObjectURL(event.target.files[0]));
        this.notAdmit = false;
      } else {
        this.notAdmit = true;
      }
    }

    removeFile() {
      this.encrypted = false;
      this.file = null;
      this.notAdmit = false;
    }

    encrypt() {
      /*
       * Encrypts an image. Sends formData with the plain image and matrix key to
       * the server API.
       */
      const formData = new FormData();
      formData.append("file", this.file, "img" + this.file.name.substring(this.file.name.indexOf(".")).toLowerCase());
      formData.append("key", this.key.value);
      formData.append("mode", this.mode.value);

      if (this.ivModes.indexOf(this.mode.value) > -1) {
        formData.append("initializationVector", this.initializationVector.value);
      } else if (this.mode.value === "CTR") {
        formData.append("counter", this.counter.value);
      }

      this.sending = true;
      this.connection.tripleDesEncrypt(formData).subscribe(events => {
        // sending
        if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.UploadProgress) {
          const auxProgress = Math.round(events.loaded / events.total * 100);

          if (auxProgress === 100) {
            this.progress = "Encrypting";
          } else {
            this.progress = "Uploading: " + auxProgress.toString() + "%";
          } // response

        } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.Response) {
          // Can't properly handle errors with blob response type, so this if
          // statement does nothing
          if (events.body["error"]) {
            this.errorUpload = true;
            this.encrypted = false;
          } else {
            this.createImageFromBlob(events.body);
            this.encrypted = true;
            this.responseDymcMess = "Encrypted";
          }

          this.sending = false;
        }
      });
    }

    decrypt() {
      /*
       * Decrypts an image. Sends formData with the plain image and matrix key to
       * the server API.
       */
      const formData = new FormData();
      formData.append("file", this.file, "img" + this.file.name.substring(this.file.name.indexOf(".")).toLowerCase());
      formData.append("key", this.key.value);
      formData.append("mode", this.mode.value);

      if (this.ivModes.indexOf(this.mode.value) > -1) {
        formData.append("initializationVector", this.initializationVector.value);
      } else if (this.mode.value === "CTR") {
        formData.append("counter", this.counter.value);
      }

      this.sending = true;
      this.connection.tripleDesDecrypt(formData).subscribe(events => {
        // sending
        if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.UploadProgress) {
          const auxProgress = Math.round(events.loaded / events.total * 100);

          if (auxProgress === 100) {
            this.progress = "Decrypting";
          } else {
            this.progress = "Uploading: " + auxProgress.toString() + "%";
          } // response

        } else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.Response) {
          // Can't properly handle errors with blob response type, so this if
          // statement does nothing
          if (events.body["error"]) {
            this.errorUpload = true;
            this.encrypted = false;
          } else {
            this.createImageFromBlob(events.body);
            this.encrypted = true;
            this.responseDymcMess = "Decrypted";
          }

          this.sending = false;
        }
      });
    }

    createImageFromBlob(image) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      }
    }

  }

  TripleDesCipherComponent.ɵfac = function TripleDesCipherComponent_Factory(t) {
    return new (t || TripleDesCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer));
  };

  TripleDesCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TripleDesCipherComponent,
    selectors: [["app-triple-des-cipher"]],
    decls: 42,
    vars: 16,
    consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-9", 3, "formGroup"], ["formDir", "ngForm"], ["for", "key"], [1, "form-row"], [1, "col-sm-9", "col-lg-9", "mr-auto"], [1, "form-group"], ["type", "text", "formControlName", "key", "id", "key", "oninput", "this.value = this.value.toUpperCase()", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-3", "col-lg-3", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "row"], [1, "col-sm-6"], ["for", "encryptionMode"], ["id", "encryptionMode", "formControlName", "mode", "required", "", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], [1, "mb-3"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto", 2, "text-align", "center"], [2, "text-align", "center", "margin-top", "10px"], [4, "ngIf", "ngIfElse"], ["elseUploadrer", ""], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [2, "margin-top", "10px"], ["class", "row", 4, "ngIf"], [1, "alert", "alert-danger"], [3, "value"], [1, "form-group", "col-md-9"], ["for", "initializationVector"], ["type", "text", "formControlName", "initializationVector", "id", "initializationVector", "oninput", "this.value = this.value.toUpperCase()", "required", "", 1, "form-control"], ["for", "counter"], ["type", "text", "formControlName", "counter", "id", "counter", "oninput", "this.value = this.value.toUpperCase()", "required", "", 1, "form-control"], ["for", "file-upload-adder"], [1, "addResourcesS"], [1, "far", "fa-plus-square"], ["id", "file-upload-adder", "accept", ".pdf,image/png,image/jpeg,image/jpg", "type", "file", 2, "display", "none", 3, "change"], ["class", "alertForm", 4, "ngIf"], [1, "alertForm"], ["id", "file", 3, "src"], ["type", "button", 1, "btn", "btn-primary", "btn-icon", "btn-round", "mr-1", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "img-fluid", "rounded", "shadow", 3, "src"]],
    template: function TripleDesCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2, 3)(4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TripleDesCipherComponent_div_10_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripleDesCipherComponent_Template_button_click_12_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Random Key ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "div", 7)(17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Encryption Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TripleDesCipherComponent_option_20_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TripleDesCipherComponent_div_21_Template, 8, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TripleDesCipherComponent_div_22_Template, 8, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18)(24, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Select an image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 20)(27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, TripleDesCipherComponent_ng_container_28_Template, 6, 1, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, TripleDesCipherComponent_ng_template_29_Template, 3, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12)(32, "div", 24)(33, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripleDesCipherComponent_Template_button_click_33_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24)(36, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripleDesCipherComponent_Template_button_click_36_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, TripleDesCipherComponent_div_39_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, TripleDesCipherComponent_div_40_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, TripleDesCipherComponent_div_41_Template, 7, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.cipherParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-success", ctx.key.valid && ctx.key.touched)("has-danger", ctx.key.invalid && ctx.key.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.key.invalid && ctx.key.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.modes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ivModes.indexOf(ctx.cipherParams.value.mode) > -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cipherParams.value.mode === "CTR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.file == null)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.file == null || ctx.cipherParams.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.file == null || ctx.cipherParams.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sending);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.encrypted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.addResourcesS[_ngcontent-%COMP%] {\n  font-size: 38px;\n  color: #454880;\n  border: 2px dashed #454880;\n  border-radius: 10px;\n  display: inline-block;\n  padding: 2rem 5rem;\n}\n\n#file[_ngcontent-%COMP%] {\n  max-width: 300px;\n  height: auto;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: #171941;\n}\n\n.random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaXBsZS1kZXMtY2lwaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUtGOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7QUFNRjs7QUFKQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU9GOztBQUxBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7QUFVRiIsImZpbGUiOiJ0cmlwbGUtZGVzLWNpcGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYW5kb20tYnRuLWNvbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmFuZG9tLWJ0biB7XG4gIG1hcmdpbjogMCU7XG59XG4udGV4cnRvY3Ige1xuICBib3JkZXI6IDFlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxOTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xuICBib3JkZXItcmFkaXVzOiAwLjQyODVyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xufVxuLnRleHRrZXkge1xuICBib3JkZXI6IDFlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxOTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xuICBib3JkZXItcmFkaXVzOiAwLjQyODVyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDNyZW07XG59XG4uYWRkUmVzb3VyY2VzUyB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgY29sb3I6ICM0NTQ4ODA7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjNDU0ODgwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJyZW0gNXJlbTtcbn1cblxuI2ZpbGUge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTk0MTtcbn1cblxuLnJhbmRvbS1idG4tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYW5kb20tYnRuIHtcbiAgbWFyZ2luOiAwJTtcbn1cbi50ZXhydG9jciB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG59XG4udGV4dGtleSB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LWhlaWdodDogM3JlbTtcbn1cbi5zdWJtaXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxhaW5UZXh0RXJyb3Ige1xuICBib3JkZXI6IDAuMDlyZW0gc29saWQgI2YzMzYyMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VjMjUwZDtcbn1cbiJdfQ== */"]
  });
  return TripleDesCipherComponent;
})();

/***/ }),

/***/ 62912:
/*!********************************************************************!*\
  !*** ./src/app/pages/vigenere-cipher/vigenere-cipher.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VigenereCipherComponent": () => (/* binding */ VigenereCipherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/connection.service */ 77669);
/* harmony import */ var _services_normalizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/normalizer.service */ 62615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);







function VigenereCipherComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div")(3, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9)(6, "blockquote")(7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.resposeDymcMess, " text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.cipherText, " ");
  }
}

const _c0 = function (a0) {
  return {
    plainTextError: a0
  };
};

let VigenereCipherComponent = /*#__PURE__*/(() => {
  class VigenereCipherComponent {
    constructor(connection, normalizer) {
      this.connection = connection;
      this.normalizer = normalizer;
      this.arguments = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
        plainText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-zA-Z ]+[ ]*[a-zA-Z ]*$")]),
        key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[A-Z]*$"), this.maxLength()])
      });
      this.cipherText = "";
      this.submitted = false;
      this.resposeDymcMess = "";
      this.load = false;
    }

    ngOnInit() {
      this.load = true;
    }

    random() {
      let ranLength = Math.floor(Math.random() * 5 + 2);
      let arrBase = Array.from({
        length: ranLength
      }, () => String.fromCharCode(65 + Math.floor(Math.random() * 25)));
      this.arguments.patchValue({
        key: arrBase.join("")
      });
    }

    encrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      this.connection.vigenereEncrypt(this.arguments.get("key").value, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.cipherText;
          this.resposeDymcMess = "Cipher";
        }

        this.submitted = true;
      });
    }

    decrypt() {
      let normalizedText = this.normalizer.setplainText(this.arguments.get("plainText").value);
      this.connection.vigenereDecrypt(this.arguments.get("key").value, normalizedText).subscribe(ans => {
        if (!ans.error) {
          this.cipherText = ans.decipherText;
          this.resposeDymcMess = "Decipher";
        }

        this.submitted = true;
      });
    }

    get key() {
      return this.arguments.get("key");
    }

    get plainText() {
      return this.arguments.get("plainText");
    }

    maxLength() {
      return control => {
        return !this.load ? null : control.value.length > this.plainText.value.length ? {
          incorrectKey: {
            value: control.value
          }
        } : null;
      };
    }

    forceUpperCase() {
      this.arguments.patchValue({
        key: this.arguments.get("key").value.toUpperCase()
      });
    }

    updateValidators() {
      this.key.updateValueAndValidity();
    }

  }

  VigenereCipherComponent.ɵfac = function VigenereCipherComponent_Factory(t) {
    return new (t || VigenereCipherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_normalizer_service__WEBPACK_IMPORTED_MODULE_1__.NormalizerService));
  };

  VigenereCipherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VigenereCipherComponent,
    selectors: [["app-vigenere-cipher"]],
    decls: 19,
    vars: 11,
    consts: [[3, "formGroup"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-sm-6", "col-lg-6", "ml-auto"], [3, "ngClass"], ["placeholder", "Key", "formControlName", "key", 1, "textkey", "form-control", 3, "ngClass", "keyup"], [1, "col-sm-3", "col-lg-3", "mr-auto", "random-btn-cont"], [1, "btn", "mr-1", "random-btn", 3, "click"], [1, "row"], [1, "col-sm-12", "col-lg-10", "mr-auto", "ml-auto"], ["placeholder", "Text to cipher", "formControlName", "plainText", 1, "texrtocr", "form-control", 3, "ngClass", "keyup"], [1, "col-sm-6", "col-lg-5", "mr-auto", "ml-auto", "submit"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "mb-3"], [1, "blockquote", "blockquote-danger"]],
    template: function VigenereCipherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function VigenereCipherComponent_Template_textarea_keyup_5_listener() {
          return ctx.forceUpperCase();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VigenereCipherComponent_Template_button_click_7_listener() {
          return ctx.random();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function VigenereCipherComponent_Template_textarea_keyup_11_listener() {
          return ctx.updateValidators();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VigenereCipherComponent_Template_button_click_13_listener() {
          return ctx.encrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Encrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VigenereCipherComponent_Template_button_click_16_listener() {
          return ctx.decrypt();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Decrypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, VigenereCipherComponent_div_18_Template, 9, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.arguments);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.key.invalid && ctx.key.dirty ? "form-group has-danger" : "input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.key.invalid && ctx.key.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.plainText.invalid && ctx.plainText.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.arguments.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".random-btn-cont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.random-btn[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.texrtocr[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  min-height: 10rem;\n}\n\n.textkey[_ngcontent-%COMP%] {\n  border: 1em !important;\n  border: 1px solid #171941;\n  background-color: #171941;\n  border-radius: 0.4285rem;\n  padding: 10px;\n  max-height: 3rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.plainTextError[_ngcontent-%COMP%] {\n  border: 0.09rem solid #f33620 !important;\n  color: #ec250d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZ2VuZXJlLWNpcGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtBQUtGOztBQUhBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0FBTUYiLCJmaWxlIjoidmlnZW5lcmUtY2lwaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmRvbS1idG4tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYW5kb20tYnRuIHtcbiAgbWFyZ2luOiAwJTtcbn1cbi50ZXhydG9jciB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG59XG4udGV4dGtleSB7XG4gIGJvcmRlcjogMWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5NDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE5NDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDI4NXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LWhlaWdodDogM3JlbTtcbn1cbi5zdWJtaXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxhaW5UZXh0RXJyb3Ige1xuICBib3JkZXI6IDAuMDlyZW0gc29saWQgI2YzMzYyMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VjMjUwZDtcbn1cbiJdfQ== */"]
  });
  return VigenereCipherComponent;
})();

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  endpoint: "https://enigma-crypto.herokuapp.com"
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 75042:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
