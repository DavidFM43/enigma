import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquaresPresentationComponent } from './squares-presentation.component';

describe('SquaresPresentationComponent', () => {
  let component: SquaresPresentationComponent;
  let fixture: ComponentFixture<SquaresPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquaresPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquaresPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
