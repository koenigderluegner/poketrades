import { TestBed } from '@angular/core/testing';

import { DatabaseFacadeService } from './database-facade.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DatabaseFacadeService', () => {
  let service: DatabaseFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });
    service = TestBed.inject(DatabaseFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
