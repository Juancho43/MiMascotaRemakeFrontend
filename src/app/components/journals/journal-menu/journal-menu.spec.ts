import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JournalMenu} from './journal-menu';

describe('JournalMenu', () => {
  let component: JournalMenu;
  let fixture: ComponentFixture<JournalMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
