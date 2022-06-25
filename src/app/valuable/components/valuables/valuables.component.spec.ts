import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValuablesComponent } from './valuables.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { MOCK_SPREADSHEET } from '../../../../../testing/mocks/spreadsheet.mock';
import { of } from 'rxjs';

describe('ValuablesComponent', () => {
  let component: ValuablesComponent;
  let fixture: ComponentFixture<ValuablesComponent>;

  const facadeSpy = jasmine.createSpyObj('SpreadsheetFacade', ['getCurrentSpreadsheet$']);

  beforeEach(waitForAsync(() => {

    facadeSpy.getCurrentSpreadsheet$.and.returnValue(of(MOCK_SPREADSHEET));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ValuablesComponent],
      providers: [
        SlugifyPipe,
        {provide: SpreadsheetFacade, useValue: facadeSpy}
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
