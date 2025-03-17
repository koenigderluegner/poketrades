import { TestBed } from '@angular/core/testing';

import { LivingDexService } from './living-dex.service';

describe('LivingDexService', () => {
  let service: LivingDexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivingDexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
