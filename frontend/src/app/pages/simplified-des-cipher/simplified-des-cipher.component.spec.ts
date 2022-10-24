import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifiedDesCipherComponent } from './simplified-des-cipher.component';

describe('SimplifiedDesCipherComponent', () => {
  let component: SimplifiedDesCipherComponent;
  let fixture: ComponentFixture<SimplifiedDesCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplifiedDesCipherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplifiedDesCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
