import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionCipherComponent } from './substitution-cipher.component';

describe('SubstitutionCipherComponent', () => {
  let component: SubstitutionCipherComponent;
  let fixture: ComponentFixture<SubstitutionCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstitutionCipherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
