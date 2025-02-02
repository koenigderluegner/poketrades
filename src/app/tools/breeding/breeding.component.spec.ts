import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreedingComponent } from './breeding.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { BehaviorSubject } from 'rxjs';
import { MOCK_SPREADSHEET } from '../../../../testing/mocks/spreadsheet.mock';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import SpyObj = jasmine.SpyObj;

describe('BreedingComponent', () => {
  let component: BreedingComponent;
  let fixture: ComponentFixture<BreedingComponent>;

  const spreadsheetSpy: SpyObj<SpreadsheetFacade> = jasmine.createSpyObj(SpreadsheetFacade, ['getCurrentSpreadsheet$']);


  beforeEach(waitForAsync(() => {

    spreadsheetSpy.getCurrentSpreadsheet$.and.returnValue(new BehaviorSubject(MOCK_SPREADSHEET));

    TestBed.configureTestingModule({
      declarations: [BreedingComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatAutocompleteModule, FormsModule, MatInputModule, ReactiveFormsModule],
      providers: [
        SlugifyPipe,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
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
