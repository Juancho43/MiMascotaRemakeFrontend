import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ForumForm} from './forum-form';

describe('ForumForm', () => {
  let component: ForumForm;
  let fixture: ComponentFixture<ForumForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
