import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JournalEdit} from './journal-edit';

describe('JournalEdit', () => {
  let component: JournalEdit;
  let fixture: ComponentFixture<JournalEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
