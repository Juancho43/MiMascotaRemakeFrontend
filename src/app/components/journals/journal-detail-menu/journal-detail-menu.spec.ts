import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JournalDetailMenu} from './journal-detail-menu';

describe('JournalDetailMenu', () => {
  let component: JournalDetailMenu;
  let fixture: ComponentFixture<JournalDetailMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalDetailMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalDetailMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
