import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreedingComponent } from './breeding.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxSubscribeModule } from '@tngtech/ngx-structurals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

describe('BreedingComponent', () => {
  let component: BreedingComponent;
  let fixture: ComponentFixture<BreedingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxSubscribeModule, MatAutocompleteModule, FormsModule, MatInputModule, ReactiveFormsModule],
      declarations: [BreedingComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
