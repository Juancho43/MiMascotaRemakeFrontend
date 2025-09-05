import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostNew} from './post-new';

describe('PostNew', () => {
  let component: PostNew;
  let fixture: ComponentFixture<PostNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
