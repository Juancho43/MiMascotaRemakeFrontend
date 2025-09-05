import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AnimalImages} from './animal-images';

describe('AnimalImages', () => {
  let component: AnimalImages;
  let fixture: ComponentFixture<AnimalImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
