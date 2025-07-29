import { TestBed } from '@angular/core/testing';

import { Session } from '@services/utils/session';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ImageService} from '@http/image-service';

describe('Session', () => {
  let service: Session;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(Session);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
