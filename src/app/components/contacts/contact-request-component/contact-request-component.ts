import {Component, input, output} from '@angular/core';
import {ContactRequest} from '@http/contact-request-service';
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
  resolve = output<'Reject' | 'Accept'>();
  onReject(request: ContactRequest) {
    this.resolve.emit('Reject');
  }

  onAccept(request: ContactRequest) {
    this.resolve.emit('Accept');
  }

  getStatusClass(status: string) {
    return status.toLowerCase();
  }
}
