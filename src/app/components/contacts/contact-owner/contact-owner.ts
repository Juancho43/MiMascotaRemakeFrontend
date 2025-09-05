import {Component, inject} from '@angular/core';
import {ContactRequestService} from '@http/contact-request-service';
import {rxResource} from '@angular/core/rxjs-interop';
import { UserContext} from '@services/context/user-contenxt';
import {ContactRequestComponent} from '@app/components/contacts/contact-request-component/contact-request-component';

@Component({
  selector: 'app-contact-owner',
  imports: [
    ContactRequestComponent
  ],
  templateUrl: './contact-owner.html',
  styleUrl: './contact-owner.scss'
})
export default class ContactOwner {

  private contactRequestService = inject(ContactRequestService);
  private userContext = inject(UserContext);
  ownerRequest = rxResource({
    params: () => {return {ownerId: this.userContext.getUser()().id!}},
    stream: ({params})=> this.contactRequestService.getByOwner(params.ownerId),
  })


}
