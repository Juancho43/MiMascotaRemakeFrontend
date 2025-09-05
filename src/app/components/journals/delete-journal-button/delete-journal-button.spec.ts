import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteJournalButton} from './delete-journal-button';

describe('DeleteJournalButton', () => {
  let component: DeleteJournalButton;
  let fixture: ComponentFixture<DeleteJournalButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteJournalButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteJournalButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
