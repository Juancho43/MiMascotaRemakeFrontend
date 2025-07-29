import {ComponentFixture, TestBed} from '@angular/core/testing';

import JournalList from './journal-list';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Animal} from '@model/model/animal';
import {ActivatedRoute} from '@angular/router';

describe('JournalList', () => {
  let component: JournalList;
  let fixture: ComponentFixture<JournalList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalList,HttpClientTestingModule],
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

    fixture = TestBed.createComponent(JournalList);
    component = fixture.componentInstance;

    component.journalsResource.set({data: [{} as Animal],success:true });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
