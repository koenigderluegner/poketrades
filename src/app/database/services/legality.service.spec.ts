import { TestBed } from '@angular/core/testing';

import { LegalityService } from './legality.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('LegalityService', () => {
  let service: LegalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });
    service = TestBed.inject(LegalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
