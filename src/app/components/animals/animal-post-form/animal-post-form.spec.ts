import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AnimalPostForm} from './animal-post-form';

describe('AnimalPostForm', () => {
  let component: AnimalPostForm;
  let fixture: ComponentFixture<AnimalPostForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalPostForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalPostForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
