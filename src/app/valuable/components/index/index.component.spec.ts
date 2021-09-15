import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { BehaviorSubject } from 'rxjs';
import { MOCK_SPREADSHEET } from '../../../../../testing/mocks/spreadsheet.mock';
import SpyObj = jasmine.SpyObj;

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  const spreadsheetSpy: SpyObj<SpreadsheetFacade> = jasmine.createSpyObj(SpreadsheetFacade, ['getCurrentSpreadsheet$']);


  beforeEach(waitForAsync(() => {

    spreadsheetSpy.getCurrentSpreadsheet$.and.returnValue(new BehaviorSubject(MOCK_SPREADSHEET));

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [IndexComponent],
      providers: [
        {provide: SpreadsheetFacade, useValue: spreadsheetSpy}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
