import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AnimalPosts} from './animal-posts';

describe('AnimalPosts', () => {
  let component: AnimalPosts;
  let fixture: ComponentFixture<AnimalPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
