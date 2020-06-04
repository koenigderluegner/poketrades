import { TestBed } from '@angular/core/testing';

import { DatabaseFacadeService } from './database-facade.service';

describe('DatabaseFacadeService', () => {
  let service: DatabaseFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
