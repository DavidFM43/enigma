import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCiphersComponent } from './block-ciphers.component';

describe('BlockCiphersComponent', () => {
  let component: BlockCiphersComponent;
  let fixture: ComponentFixture<BlockCiphersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockCiphersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCiphersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
