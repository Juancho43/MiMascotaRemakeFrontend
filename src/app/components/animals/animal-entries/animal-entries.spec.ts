import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AnimalEntries} from './animal-entries';

describe('AnimalEntries', () => {
  let component: AnimalEntries;
  let fixture: ComponentFixture<AnimalEntries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalEntries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalEntries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
