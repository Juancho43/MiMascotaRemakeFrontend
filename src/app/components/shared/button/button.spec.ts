import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Button} from './button';
import {ActivatedRoute, provideRouter} from '@angular/router';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
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

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;


    fixture.componentRef.setInput('route', '/test');

    // Set optional inputs if needed
    fixture.componentRef.setInput('label', 'Test Button');
    fixture.componentRef.setInput('icon', 'test-icon');

    fixture.detectChanges();
    // Set required input BEFORE detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
