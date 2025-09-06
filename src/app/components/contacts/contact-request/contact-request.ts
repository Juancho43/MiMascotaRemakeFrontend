import {Component, effect, inject} from '@angular/core';
import {ContactRequestService, ResolveContactRequest} from '@http/contact-request-service';
import {UserContext} from '@services/context/user-contenxt';
import {rxResource} from '@angular/core/rxjs-interop';
import {ContactRequestComponent} from '@app/components/contacts/contact-request-component/contact-request-component';
import {EventService} from '@services/context/event-service';

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
  private event = inject(EventService);
  request = rxResource({
    params: () => {return {ownerId: this.userContext.getUser()().id!}},
    stream: ({params})=> this.contactRequestService.getByRequester(params.ownerId),
  })

  resolveRequest($event : ResolveContactRequest) {
    this.contactRequestService.resolve($event).subscribe();
  }
  constructor() {
    effect(()=>{
      const events = this.event.getEvents()();
      if(events.length > 0 && events[events.length - 1 ].action === 'update'){
        this.request.reload();
      }
    })
  }
}
