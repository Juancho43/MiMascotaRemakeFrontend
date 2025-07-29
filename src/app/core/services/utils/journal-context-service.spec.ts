import { TestBed } from '@angular/core/testing';

import { JournalContextService } from './journal-context-service';

describe('JournalContextService', () => {
  let service: JournalContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
