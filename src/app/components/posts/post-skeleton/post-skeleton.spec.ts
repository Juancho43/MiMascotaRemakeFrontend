import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostSkeleton} from './post-skeleton';

describe('PostSkeleton', () => {
  let component: PostSkeleton;
  let fixture: ComponentFixture<PostSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
