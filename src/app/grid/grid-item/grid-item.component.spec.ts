import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridItemComponent } from './grid-item.component';

describe('GridItemComponent', () => {
  let component: GridItemComponent;
  let fixture: ComponentFixture<GridItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GridItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
