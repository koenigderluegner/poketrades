import { TestBed } from '@angular/core/testing';

import { LegalityService } from './legality.service';

describe('LegalityService', () => {
  let service: LegalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
