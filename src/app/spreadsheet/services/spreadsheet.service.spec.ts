import { TestBed } from '@angular/core/testing';

import { SpreadsheetService } from './spreadsheet.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SpreadsheetService', () => {
  let service: SpreadsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SlugifyPipe,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(SpreadsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
