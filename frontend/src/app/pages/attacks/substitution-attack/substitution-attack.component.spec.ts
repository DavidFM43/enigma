import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionAttackComponent } from './substitution-attack.component';

describe('SubstitutionAttackComponent', () => {
  let component: SubstitutionAttackComponent;
  let fixture: ComponentFixture<SubstitutionAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstitutionAttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
