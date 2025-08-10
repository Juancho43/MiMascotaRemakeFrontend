import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EntryNew} from './entry-new';

describe('EntryNew', () => {
  let component: EntryNew;
  let fixture: ComponentFixture<EntryNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
