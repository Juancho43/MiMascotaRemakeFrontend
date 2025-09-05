import {TestBed} from '@angular/core/testing';

import {LocationContext} from './location-context';

describe('LocationContext', () => {
  let service: LocationContext;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationContext);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
