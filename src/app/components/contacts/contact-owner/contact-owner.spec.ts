import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOwner } from './contact-owner';

describe('ContactOwner', () => {
  let component: ContactOwner;
  let fixture: ComponentFixture<ContactOwner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactOwner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactOwner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
