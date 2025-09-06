import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumReports } from './forum-reports';

describe('ForumReports', () => {
  let component: ForumReports;
  let fixture: ComponentFixture<ForumReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
