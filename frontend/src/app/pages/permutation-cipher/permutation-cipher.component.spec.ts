import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PermutationCipherComponent } from "./permutation-cipher.component";

describe("PermutationCipherComponent", () => {
  let component: PermutationCipherComponent;
  let fixture: ComponentFixture<PermutationCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermutationCipherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermutationCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
