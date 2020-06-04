import { TestBed } from '@angular/core/testing';

import { DatabaseFacadeService } from './database-facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DatabaseFacadeService', () => {
  let service: DatabaseFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DatabaseFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
