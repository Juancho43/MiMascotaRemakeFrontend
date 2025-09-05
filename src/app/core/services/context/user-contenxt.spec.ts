import {TestBed} from '@angular/core/testing';

import {UserContenxt} from './user-contenxt';

describe('UserContenxt', () => {
  let service: UserContenxt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserContenxt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
