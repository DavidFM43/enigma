import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffineAttackComponent } from './affine-attack.component';

describe('AffineAttackComponent', () => {
  let component: AffineAttackComponent;
  let fixture: ComponentFixture<AffineAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffineAttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffineAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
