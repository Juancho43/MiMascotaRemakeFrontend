import { TestBed } from '@angular/core/testing';

import { EntryContext } from './entry-context.service';

describe('EntryContex', () => {
  let service: EntryContext;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryContext);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
