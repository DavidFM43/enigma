import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabinCipherComponent } from './rabin-cipher.component';

describe('RabinCipherComponent', () => {
  let component: RabinCipherComponent;
  let fixture: ComponentFixture<RabinCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabinCipherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RabinCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
