import {Component, inject} from '@angular/core';
import {HomeButton} from '@app/components/shared/home-button/home-button';
import {rxResource} from '@angular/core/rxjs-interop';
import {AuthService} from '@http/auth.service';

@Component({
  selector: 'app-user',
  imports: [
    HomeButton
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export default class User {
  private auth = inject(AuthService);
  userResource = rxResource({
    stream: () => this.auth.getUser(),
  });




}
