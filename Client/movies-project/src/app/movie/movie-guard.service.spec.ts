import { TestBed } from '@angular/core/testing';

import { MovieGuardService } from './movie-guard.service';

describe('MovieGuardService', () => {
  let service: MovieGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
