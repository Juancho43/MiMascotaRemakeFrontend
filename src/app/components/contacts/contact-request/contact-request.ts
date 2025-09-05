import {Component, inject} from '@angular/core';
import {ContactRequestService} from '@http/contact-request-service';
import {UserContext} from '@services/context/user-contenxt';
import {rxResource} from '@angular/core/rxjs-interop';
import {ContactRequestComponent} from '@app/components/contacts/contact-request-component/contact-request-component';

@Component({
  selector: 'app-contact-request',
  imports: [
    ContactRequestComponent
  ],
  templateUrl: './contact-request.html',
  styleUrl: './contact-request.scss'
})
export default class ContactRequest {
  private contactRequestService = inject(ContactRequestService);
  private userContext = inject(UserContext);
  request = rxResource({
    params: () => {return {ownerId: this.userContext.getUser()().id!}},
    stream: ({params})=> this.contactRequestService.getByRequester(params.ownerId),
  })

}
