import {Component, effect, inject} from '@angular/core';
import {AuthService} from '@http/auth.service';
import {UserContext} from '@services/context/user-contenxt';
import {rxResource} from '@angular/core/rxjs-interop';
import {RouterOutlet} from '@angular/router';
import {BackButton} from '@app/components/shared/back-button/back-button';
import {HomeButton} from '@app/components/shared/home-button/home-button';

@Component({
  selector: 'app-contact-requests-page',
  imports: [
    RouterOutlet,
    BackButton,
    HomeButton
  ],
  templateUrl: './contact-requests-page.html',
  styleUrl: './contact-requests-page.scss'
})
export default class ContactRequestsPage {
  private auth = inject(AuthService);
  private userContext = inject(UserContext);
  userResource = rxResource({
    stream:()=> this.auth.getUser()
  })

  constructor() {
    effect(()=>{
      if (!this.userResource.isLoading() && !this.userResource.error()){
        this.userContext.setUser(this.userResource.value()!.data!);
      }
    });
  }
}
