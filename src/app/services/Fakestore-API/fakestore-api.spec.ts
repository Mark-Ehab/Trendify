import { TestBed } from '@angular/core/testing';

import { FakestoreAPI } from './fakestore-api';

describe('FakestoreAPI', () => {
  let service: FakestoreAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakestoreAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
