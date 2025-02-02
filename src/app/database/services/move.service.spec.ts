import { TestBed } from '@angular/core/testing';

import { MoveService } from './move.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('MoveService', () => {
  let service: MoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });
    service = TestBed.inject(MoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
