import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Session} from '@services/utils/session';


@Component({
  selector: 'app-logout',
  imports: [
    RouterLink
  ],
  templateUrl: './logout.html',
  styleUrl: './logout.scss'
})
export default class Logout {

  private session = inject(Session)
  logout()
  {
    this.session.logout();

  }
}
