import {Component, effect, inject} from '@angular/core';
import {ContactRequestService, ResolveContactRequest} from '@http/contact-request-service';
import {rxResource} from '@angular/core/rxjs-interop';
import { UserContext} from '@services/context/user-contenxt';
import {ContactRequestComponent} from '@app/components/contacts/contact-request-component/contact-request-component';
import {EventService} from '@services/context/event-service';

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
  private event = inject(EventService);
  ownerRequest = rxResource({
    params: () => {return {ownerId: this.userContext.getUser()().id!}},
    stream: ({params})=> this.contactRequestService.getByOwner(params.ownerId),
  })

  resolveRequest($event : ResolveContactRequest) {
    this.contactRequestService.resolve($event).subscribe();
  }

  constructor() {
    effect(()=>{
      const events = this.event.getEvents()();
      if(events.length > 0 && events[events.length - 1 ].action === 'update'){
        this.ownerRequest.reload();
      }
    })
  }


}
