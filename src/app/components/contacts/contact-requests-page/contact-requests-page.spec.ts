import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRequestsPage } from './contact-requests-page';

describe('ContactRequestsPage', () => {
  let component: ContactRequestsPage;
  let fixture: ComponentFixture<ContactRequestsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactRequestsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
