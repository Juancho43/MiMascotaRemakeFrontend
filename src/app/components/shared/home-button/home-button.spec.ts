import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeButton} from './home-button';
import {ActivatedRoute} from '@angular/router';

describe('HomeButton', () => {
  let component: HomeButton;
  let fixture: ComponentFixture<HomeButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeButton],
      providers:[
        {
          provide: ActivatedRoute,
          useValue: {
           snapshot: {
              queryParams: {}
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
