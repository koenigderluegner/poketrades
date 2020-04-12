import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNaviItemComponent } from './sub-navi-item.component';

describe('SubNaviItemComponent', () => {
  let component: SubNaviItemComponent;
  let fixture: ComponentFixture<SubNaviItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNaviItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNaviItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
