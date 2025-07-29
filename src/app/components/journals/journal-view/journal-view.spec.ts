import {ComponentFixture, TestBed} from '@angular/core/testing';

import JournalView from './journal-view';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';

describe('JournalView', () => {
  let component: JournalView;
  let fixture: ComponentFixture<JournalView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalView,HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: {}
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalView);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-id');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
