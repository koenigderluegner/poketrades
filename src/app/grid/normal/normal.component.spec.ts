import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NormalComponent } from './normal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NormalComponent', () => {
  let component: NormalComponent;
  let fixture: ComponentFixture<NormalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NormalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
