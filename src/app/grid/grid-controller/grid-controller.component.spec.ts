import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridControllerComponent } from './grid-controller.component';

describe('GridControllerComponent', () => {
  let component: GridControllerComponent;
  let fixture: ComponentFixture<GridControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
