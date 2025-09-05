import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ForumEdit} from './forum-edit';

describe('ForumEdit', () => {
  let component: ForumEdit;
  let fixture: ComponentFixture<ForumEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
