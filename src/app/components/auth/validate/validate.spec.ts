import {ComponentFixture, TestBed} from '@angular/core/testing';

import Validate from './validate';
import {provideHttpClient} from '@angular/common/http';
import {HttpClientTestingModule, provideHttpClientTesting} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';

describe('Validate', () => {
  let component: Validate;
  let fixture: ComponentFixture<Validate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Validate,HttpClientTestingModule],
      providers:[
        provideHttpClient(),
        provideHttpClientTesting(),

        {provide: ActivatedRoute, useValue: ActivatedRoute},

      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(Validate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
