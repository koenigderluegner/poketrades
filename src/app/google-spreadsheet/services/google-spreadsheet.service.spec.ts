import { TestBed } from '@angular/core/testing';

import { GoogleSpreadsheetService } from './google-spreadsheet.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('GoogleSpreadsheetService', () => {
  let service: GoogleSpreadsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });
    service = TestBed.inject(GoogleSpreadsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
