import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRequest } from './contact-request';

describe('ContactRequest', () => {
  let component: ContactRequest;
  let fixture: ComponentFixture<ContactRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
