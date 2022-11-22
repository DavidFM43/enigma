import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElGamalCipherComponent } from './el-gamal-cipher.component';

describe('ElGamalCipherComponent', () => {
  let component: ElGamalCipherComponent;
  let fixture: ComponentFixture<ElGamalCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElGamalCipherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElGamalCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
