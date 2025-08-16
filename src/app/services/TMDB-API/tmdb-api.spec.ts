import { TestBed } from '@angular/core/testing';

import { TMDBAPI } from './tmdb-api';

describe('TMDBAPI', () => {
  let service: TMDBAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TMDBAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
