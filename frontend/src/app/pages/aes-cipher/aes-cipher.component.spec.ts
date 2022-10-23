import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AesCipherComponent } from './aes-cipher.component';

describe('AesCipherComponent', () => {
  let component: AesCipherComponent;
  let fixture: ComponentFixture<AesCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AesCipherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AesCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
