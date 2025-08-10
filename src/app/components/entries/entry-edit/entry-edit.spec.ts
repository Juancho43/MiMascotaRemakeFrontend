import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EntryEdit} from './entry-edit';

describe('EntryEdit', () => {
  let component: EntryEdit;
  let fixture: ComponentFixture<EntryEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
