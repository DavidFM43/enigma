import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillAttackComponent } from './hill-attack.component';

describe('HillAttackComponent', () => {
  let component: HillAttackComponent;
  let fixture: ComponentFixture<HillAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HillAttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HillAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
