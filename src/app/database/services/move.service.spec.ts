import { TestBed } from '@angular/core/testing';

import { MoveService } from './move.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoveService', () => {
  let service: MoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
