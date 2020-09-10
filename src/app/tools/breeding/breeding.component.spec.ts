import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingComponent } from './breeding.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxSubscribeModule } from '@tngtech/ngx-structurals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BreedingComponent', () => {
  let component: BreedingComponent;
  let fixture: ComponentFixture<BreedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, NgxSubscribeModule, MatAutocompleteModule ],
      declarations: [ BreedingComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
