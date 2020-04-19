import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallGuyBubbleComponent } from './ball-guy-bubble.component';

describe('BallGuyBubbleComponent', () => {
  let component: BallGuyBubbleComponent;
  let fixture: ComponentFixture<BallGuyBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallGuyBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallGuyBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
