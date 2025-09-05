import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LocationsListSkeleton} from './locations-list-skeleton';

describe('LocationsListSkeleton', () => {
  let component: LocationsListSkeleton;
  let fixture: ComponentFixture<LocationsListSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsListSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsListSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
