import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElGamalElipCipherComponent } from './el-gamal-elip-cipher.component';

describe('ElGamalElipCipherComponent', () => {
  let component: ElGamalElipCipherComponent;
  let fixture: ComponentFixture<ElGamalElipCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElGamalElipCipherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElGamalElipCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
