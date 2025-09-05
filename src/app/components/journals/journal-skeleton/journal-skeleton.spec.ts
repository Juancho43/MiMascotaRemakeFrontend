import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JournalSkeleton} from './journal-skeleton';

describe('JournalSkeleton', () => {
  let component: JournalSkeleton;
  let fixture: ComponentFixture<JournalSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
