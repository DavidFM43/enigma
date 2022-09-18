import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftAttackComponent } from './shift-attack.component';

describe('ShiftAttackComponent', () => {
  let component: ShiftAttackComponent;
  let fixture: ComponentFixture<ShiftAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftAttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
