import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageSkeleton} from './image-skeleton';

describe('ImageSkeleton', () => {
  let component: ImageSkeleton;
  let fixture: ComponentFixture<ImageSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
