import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedMoveComponent } from './detailed-move.component';

describe('DetailedMoveComponent', () => {
  let component: DetailedMoveComponent;
  let fixture: ComponentFixture<DetailedMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedMoveComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
