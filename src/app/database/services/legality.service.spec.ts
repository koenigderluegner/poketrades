import { TestBed } from '@angular/core/testing';

import { LegalityService } from './legality.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LegalityService', () => {
  let service: LegalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LegalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
