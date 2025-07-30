import {ComponentFixture, TestBed} from '@angular/core/testing';

import User from './user';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';

describe('User', () => {
  let component: User;
  let fixture: ComponentFixture<User>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [User,HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: {}, params: {} } }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(User);
    component = fixture.componentInstance;
    component.userResource.set({ data: { name: 'Test', email: 'test@test.com', telephone: '123', location: 'Test City' },
    success: true,

    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
