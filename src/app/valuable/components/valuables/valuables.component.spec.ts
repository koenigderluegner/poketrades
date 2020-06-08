import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuablesComponent } from './valuables.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ValuablesComponent', () => {
  let component: ValuablesComponent;
  let fixture: ComponentFixture<ValuablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ValuablesComponent],
      providers: [
        SlugifyPipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
