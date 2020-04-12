import { TestBed } from '@angular/core/testing';

import { SpreadsheetDataService } from './spreadsheet-data.service';

describe('SpreadsheetDataService', () => {
  let service: SpreadsheetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpreadsheetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
