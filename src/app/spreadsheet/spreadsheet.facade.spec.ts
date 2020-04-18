import { TestBed } from '@angular/core/testing';

import { SpreadsheetFacade } from './spreadsheet.facade';

describe('Spreadsheet.FacadeService', () => {
  let facade: SpreadsheetFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    facade = TestBed.inject(SpreadsheetFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
