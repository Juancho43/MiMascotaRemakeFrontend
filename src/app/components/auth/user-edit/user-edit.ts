import {Component, inject} from '@angular/core';
import {UserForm} from '@app/components/auth/user-form/user-form';
import {Button} from '@app/components/shared/button/button';
import {User} from '@model/auth/User';
import {AuthService} from '@http/auth.service';
import {rxResource} from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-user-edit',
  imports: [
    UserForm,
    Button
  ],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.scss'
})
export default class UserEdit {
  private authService = inject(AuthService);
  userResource = rxResource(
  {
    stream: () =>{
      return this.authService.getUser();
    }
  }
)
  onEditUserHandler(data: User){
    this.authService.editUser(data).subscribe();
  }
}
