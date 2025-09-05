import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ForumView} from './forum-view';

describe('ForumView', () => {
  let component: ForumView;
  let fixture: ComponentFixture<ForumView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
