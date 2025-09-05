import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AnimalData} from './animal-data';

describe('AnimalData', () => {
  let component: AnimalData;
  let fixture: ComponentFixture<AnimalData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
