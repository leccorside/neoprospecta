import { TestBed } from '@angular/core/testing';

import { CostomersService } from './costomers.service';

describe('CostomersService', () => {
  let service: CostomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
