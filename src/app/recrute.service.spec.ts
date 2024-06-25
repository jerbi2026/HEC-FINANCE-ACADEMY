import { TestBed } from '@angular/core/testing';

import { RecruteService } from './recrute.service';

describe('RecruteService', () => {
  let service: RecruteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
