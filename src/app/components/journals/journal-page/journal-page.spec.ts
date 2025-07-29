import {ComponentFixture, TestBed} from '@angular/core/testing';

import JournalPage from './journal-page';
import {ActivatedRoute} from '@angular/router';

describe('JournalPage', () => {
  let component: JournalPage;
  let fixture: ComponentFixture<JournalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalPage],
      providers: [
        // Add any necessary providers here, e.g., for services or state management
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

    fixture = TestBed.createComponent(JournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
