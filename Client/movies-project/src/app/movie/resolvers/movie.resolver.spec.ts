import { TestBed } from '@angular/core/testing';

import { MovieResolver } from './movie.resolver';

describe('ResolverResolver', () => {
  let resolver: MovieResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MovieResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
