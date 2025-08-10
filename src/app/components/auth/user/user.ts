import {Component, inject} from '@angular/core';
import {HomeButton} from '@app/components/shared/home-button/home-button';
import {rxResource} from '@angular/core/rxjs-interop';
import {AuthService} from '@http/auth.service';
import {DatePipe} from '@angular/common';
import {Button} from '@app/components/shared/button/button';
import {DialogService} from '@services/utils/dialog-service';
import {DeleteDialog} from '@app/components/shared/delete-dialog/delete-dialog';
import {Session} from '@services/utils/session';

@Component({
  selector: 'app-user',
  imports: [
    HomeButton,
    DatePipe,
    Button
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export default class User {
  private auth = inject(AuthService);
  private session = inject(Session);
  private dialogService = inject(DialogService);
  userResource = rxResource({
    stream: () => this.auth.getUser(),
  });


  openDeleteDialog(): void {
    const dialogRef= this.dialogService.openDialog(DeleteDialog,{entity:'perfil'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.auth.deleteUser(this.userResource.value()!.data!).subscribe();
        this.session.logout();

      }
    });
  }

}
