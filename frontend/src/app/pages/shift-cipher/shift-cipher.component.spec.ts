import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftCipherComponent } from './shift-cipher.component';

describe('ShiftCipherComponent', () => {
  let component: ShiftCipherComponent;
  let fixture: ComponentFixture<ShiftCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftCipherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
