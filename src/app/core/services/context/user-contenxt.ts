import {Injectable, signal} from '@angular/core';
import {User} from '@model/auth/User';

@Injectable({
  providedIn: 'root'
})
export class UserContext {
  private user = signal<User>({id:'null'} as User);
  setUser(user: User) {
    this.user.set(user);
  }
  getUser() {
    return this.user;
  }
}
