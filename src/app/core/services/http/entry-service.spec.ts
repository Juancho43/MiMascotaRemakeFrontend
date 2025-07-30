import {TestBed} from '@angular/core/testing';

import {EntryService} from './entry-service';
import {provideHttpClient} from '@angular/common/http';

describe('EntryService', () => {
  let service: EntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        provideHttpClient()
      ]
    });
    service = TestBed.inject(EntryService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
