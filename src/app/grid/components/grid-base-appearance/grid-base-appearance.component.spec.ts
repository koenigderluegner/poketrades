import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBaseAppearanceComponent } from './grid-base-appearance.component';

describe('GridBaseAppearanceComponent', () => {
  let component: GridBaseAppearanceComponent;
  let fixture: ComponentFixture<GridBaseAppearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridBaseAppearanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBaseAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
