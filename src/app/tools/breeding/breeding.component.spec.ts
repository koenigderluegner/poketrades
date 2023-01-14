import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreedingComponent } from './breeding.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { BehaviorSubject } from 'rxjs';
import { MOCK_SPREADSHEET } from '../../../../testing/mocks/spreadsheet.mock';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import SpyObj = jasmine.SpyObj;

describe('BreedingComponent', () => {
  let component: BreedingComponent;
  let fixture: ComponentFixture<BreedingComponent>;

  const spreadsheetSpy: SpyObj<SpreadsheetFacade> = jasmine.createSpyObj(SpreadsheetFacade, ['getCurrentSpreadsheet$']);


  beforeEach(waitForAsync(() => {

    spreadsheetSpy.getCurrentSpreadsheet$.and.returnValue(new BehaviorSubject(MOCK_SPREADSHEET));

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatAutocompleteModule, FormsModule, MatInputModule, ReactiveFormsModule],
      declarations: [BreedingComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        SlugifyPipe
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
