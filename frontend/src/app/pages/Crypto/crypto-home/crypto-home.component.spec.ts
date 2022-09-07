import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoHomeComponent } from './crypto-home.component';

describe('CryptoHomeComponent', () => {
  let component: CryptoHomeComponent;
  let fixture: ComponentFixture<CryptoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
