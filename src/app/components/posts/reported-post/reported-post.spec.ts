import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedPost } from './reported-post';

describe('ReportedPost', () => {
  let component: ReportedPost;
  let fixture: ComponentFixture<ReportedPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportedPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportedPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
