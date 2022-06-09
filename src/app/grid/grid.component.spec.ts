import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { NgxSubscribeModule } from '@tngtech/ngx-structurals';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxSubscribeModule],
      declarations: [GridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
