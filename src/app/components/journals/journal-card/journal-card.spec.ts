import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JournalCard} from './journal-card';
import {ActivatedRoute} from '@angular/router';

describe('JournalCard', () => {
  let component: JournalCard;
  let fixture: ComponentFixture<JournalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalCard],
      providers:[
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

    fixture = TestBed.createComponent(JournalCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('journal', {});

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
