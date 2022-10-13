import { ComponentFixture, TestBed } from "@angular/core/testing";

import { VigenereAttackComponent } from "./vigenere-attack.component";

describe("VigenereAttackComponent", () => {
  let component: VigenereAttackComponent;
  let fixture: ComponentFixture<VigenereAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VigenereAttackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VigenereAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
