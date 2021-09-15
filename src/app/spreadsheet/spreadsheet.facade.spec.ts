import { TestBed } from '@angular/core/testing';

import { SpreadsheetFacade } from './spreadsheet.facade';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';

describe('Spreadsheet.FacadeService', () => {
  let facade: SpreadsheetFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SlugifyPipe
      ]
    });
    facade = TestBed.inject(SpreadsheetFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
