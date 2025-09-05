import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ForumAll} from './forum-all';

describe('ForumAll', () => {
  let component: ForumAll;
  let fixture: ComponentFixture<ForumAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumAll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
