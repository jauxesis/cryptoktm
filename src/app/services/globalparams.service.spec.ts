import { TestBed, inject } from '@angular/core/testing';

import { GlobalparamsService } from './globalparams.service';

describe('GlobalparamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalparamsService]
    });
  });

  it('should be created', inject([GlobalparamsService], (service: GlobalparamsService) => {
    expect(service).toBeTruthy();
  }));
});
