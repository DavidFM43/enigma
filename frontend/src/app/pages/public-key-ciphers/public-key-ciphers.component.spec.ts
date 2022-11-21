import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicKeyCiphersComponent } from './public-key-ciphers.component';

describe('PublicKeyCiphersComponent', () => {
  let component: PublicKeyCiphersComponent;
  let fixture: ComponentFixture<PublicKeyCiphersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicKeyCiphersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicKeyCiphersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
