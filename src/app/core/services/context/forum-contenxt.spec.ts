import {TestBed} from '@angular/core/testing';

import {ForumContext} from './forum-context.service';

describe('ForumContenxt', () => {
  let service: ForumContext;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumContext);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
