import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ForumSkeleton} from './forum-skeleton';

describe('ForumSkeleton', () => {
  let component: ForumSkeleton;
  let fixture: ComponentFixture<ForumSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
