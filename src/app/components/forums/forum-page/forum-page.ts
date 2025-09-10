import {Component, effect, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BackButton} from '@app/components/shared/back-button/back-button';
import {HomeButton} from '@app/components/shared/home-button/home-button';
import {AuthService} from '@http/auth.service';
import {UserContext} from '@services/context/user-contenxt';
import {rxResource} from '@angular/core/rxjs-interop';
import {User} from '@model/auth/User';


@Component({
  selector: 'app-forum-page',
  imports: [
    RouterOutlet,
    BackButton,
    HomeButton
  ],
  templateUrl: './forum-page.html',
  styleUrl: './forum-page.scss'
})
export default class ForumPage {

  private auth = inject(AuthService);
  private userContext = inject(UserContext);
  userResource = rxResource({
    stream:()=> this.auth.getUser()
  })

  constructor() {
    effect(()=>{
      if (!this.userResource.isLoading() && !this.userResource.error()){
        const user = this.userResource.value()!.data ?? {id: ''} as User;
        this.userContext.setUser(user);
      }
    });


  }


}
