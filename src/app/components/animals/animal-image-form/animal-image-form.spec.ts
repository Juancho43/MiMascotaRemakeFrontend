import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AnimalImageForm} from './animal-image-form';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('AnimalImageForm', () => {
  let component: AnimalImageForm;
  let fixture: ComponentFixture<AnimalImageForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalImageForm],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalImageForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
