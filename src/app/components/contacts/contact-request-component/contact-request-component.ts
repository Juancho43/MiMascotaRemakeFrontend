import {Component, input, output} from '@angular/core';
import {ContactRequest, ResolveContactRequest} from '@http/contact-request-service';
import {DatePipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-contact-request-component',
  imports: [
    NgClass,
    DatePipe
  ],
  templateUrl: './contact-request-component.html',
  styleUrl: './contact-request-component.scss'
})
export class ContactRequestComponent {
  readonly request = input.required<ContactRequest>();
  readonly requester = input(false);
  resolve = output<ResolveContactRequest>();
  onReject(request: ContactRequest) {
    this.resolve.emit({id:request.id!,status:'Rejected'});
  }

  onAccept(request: ContactRequest) {
     this.resolve.emit({id:request.id!,status:'Accepted'});
  }

  getStatusClass(status: string) {
    return status.toLowerCase();
  }
}
