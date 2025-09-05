import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserSkeleton} from './user-skeleton';

describe('UserSkeleton', () => {
  let component: UserSkeleton;
  let fixture: ComponentFixture<UserSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
