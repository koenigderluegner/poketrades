import { TestBed } from '@angular/core/testing';

import { GoogleSpreadsheetService } from './google-spreadsheet.service';

describe('GoogleSpreadsheetService', () => {
  let service: GoogleSpreadsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSpreadsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
