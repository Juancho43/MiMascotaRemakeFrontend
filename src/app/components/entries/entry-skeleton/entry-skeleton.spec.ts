import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EntrySkeleton} from './entry-skeleton';

describe('EntrySkeleton', () => {
  let component: EntrySkeleton;
  let fixture: ComponentFixture<EntrySkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrySkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrySkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
