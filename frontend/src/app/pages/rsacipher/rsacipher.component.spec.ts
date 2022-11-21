import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSACipherComponent } from './rsacipher.component';

describe('RSACipherComponent', () => {
  let component: RSACipherComponent;
  let fixture: ComponentFixture<RSACipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSACipherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RSACipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
