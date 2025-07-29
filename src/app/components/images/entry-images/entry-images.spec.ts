import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EntryImages} from './entry-images';

describe('EntryImages', () => {
  let component: EntryImages;
  let fixture: ComponentFixture<EntryImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
