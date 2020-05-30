import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNaviItemComponent } from './sub-navi-item.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SubNaviItemComponent', () => {
  let component: SubNaviItemComponent;
  let fixture: ComponentFixture<SubNaviItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SharedModule, RouterTestingModule],
      declarations: [SubNaviItemComponent],
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
