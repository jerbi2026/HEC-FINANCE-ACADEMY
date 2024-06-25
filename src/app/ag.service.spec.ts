import { TestBed } from '@angular/core/testing';

import { AgService } from './ag.service';

describe('AgService', () => {
  let service: AgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
