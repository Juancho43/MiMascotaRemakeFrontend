import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ForumLocation} from './forum-location';

describe('ForumLocation', () => {
  let component: ForumLocation;
  let fixture: ComponentFixture<ForumLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
