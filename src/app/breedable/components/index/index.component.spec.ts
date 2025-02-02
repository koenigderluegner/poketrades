import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { BehaviorSubject } from 'rxjs';
import { MOCK_SPREADSHEET } from '../../../../../testing/mocks/spreadsheet.mock';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import SpyObj = jasmine.SpyObj;

describe('Breedables IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  const spreadsheetSpy: SpyObj<SpreadsheetFacade> = jasmine.createSpyObj(SpreadsheetFacade, ['getCurrentSpreadsheet$']);


  beforeEach(waitForAsync(() => {

    spreadsheetSpy.getCurrentSpreadsheet$.and.returnValue(new BehaviorSubject(MOCK_SPREADSHEET));

    TestBed.configureTestingModule({
      declarations: [IndexComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, SharedModule],
      providers: [
        {provide: SpreadsheetFacade, useValue: spreadsheetSpy},
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
