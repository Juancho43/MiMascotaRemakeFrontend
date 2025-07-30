import {ComponentFixture, TestBed} from '@angular/core/testing';

import JournalDetail from './journal-detail';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('JournalDetail', () => {
  let component: JournalDetail;
  let fixture: ComponentFixture<JournalDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalDetail],
      providers:[
        provideHttpClient(),
        provideHttpClientTesting(),

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalDetail);
    component = fixture.componentInstance;
    component.journal.set({animal:{'name':'Test Animal'}});
    component.animalImagesResource.set({data: {id:'aaa',images:[]}, success: true});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
