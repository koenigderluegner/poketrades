import { TestBed } from '@angular/core/testing';

import { SpreadsheetFacade } from './spreadsheet.facade';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('Spreadsheet.FacadeService', () => {
  let facade: SpreadsheetFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SlugifyPipe,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    });
    facade = TestBed.inject(SpreadsheetFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
