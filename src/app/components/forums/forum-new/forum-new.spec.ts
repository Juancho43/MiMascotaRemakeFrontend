import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ForumNew} from './forum-new';

describe('ForumNew', () => {
  let component: ForumNew;
  let fixture: ComponentFixture<ForumNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
