import {ComponentFixture, TestBed} from '@angular/core/testing';

import Logout from './logout';
import Login from '@app/components/auth/login/login';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';

describe('Logout', () => {
  let component: Logout;
  let fixture: ComponentFixture<Logout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logout,HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: {}, params: {} } }
      ]
    })
      .compileComponents();    fixture = TestBed.createComponent(Logout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
