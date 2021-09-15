import { TestBed } from '@angular/core/testing';

import { GoogleSpreadsheetService } from './google-spreadsheet.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GoogleSpreadsheetService', () => {
  let service: GoogleSpreadsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GoogleSpreadsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
