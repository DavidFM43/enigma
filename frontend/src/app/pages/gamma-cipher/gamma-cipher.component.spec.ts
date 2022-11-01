import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GammaCipherComponent } from './gamma-cipher.component';

describe('GammaCipherComponent', () => {
  let component: GammaCipherComponent;
  let fixture: ComponentFixture<GammaCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GammaCipherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GammaCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
