import { TestBed } from '@angular/core/testing';

import { NaturesService } from './natures.service';

describe('NaturesService', () => {
  let service: NaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should detect natures', () => {
    expect(service.isNature('jolly')).toBeTrue();
    expect(service.isNature('AdAmaNt')).toBeTrue();
    expect(service.isNature('haardy')).toBeFalse();
    expect(service.isNature('null')).toBeFalse();
    expect(service.isNature('')).toBeFalse();
  });


});
