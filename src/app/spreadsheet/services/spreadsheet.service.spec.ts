import { TestBed } from '@angular/core/testing';

import { SpreadsheetService } from './spreadsheet.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SpreadsheetService', () => {
  let service: SpreadsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SpreadsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
