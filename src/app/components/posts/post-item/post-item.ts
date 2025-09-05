import {Component, inject, input, signal} from '@angular/core';
import {Post} from '@model/model/post';
import {DatePipe} from '@angular/common';
import {Button} from '@app/components/shared/button/button';
import {environment} from '@environments/environment.development';
import {DeleteDialog} from '@app/components/shared/delete-dialog/delete-dialog';
import {DialogService} from '@services/utils/dialog-service';
import {PostService} from '@http/post-service';
import {ConfirmationDialog} from '@app/components/shared/comfirmation-dialog/confirmation-dialog.component';
import {ReportsService} from '@http/reports-service';
import {ReportPostDialog} from '@app/components/posts/report-post-dialog/report-post-dialog';
import {ContactRequestService} from '@http/contact-request-service';
import {CreateContactRequest} from '@http/contact-request-service';
import {UserContext} from '@services/context/user-contenxt';
@Component({
  selector: 'app-post-item',
  imports: [
    DatePipe,
    Button
  ],
  templateUrl: './post-item.html',
  styleUrl: './post-item.scss'
})
export class PostItem {
  readonly post = input.required<Post>();
  readonly owner = input(false);
  private service = inject(PostService);
  private dialogService = inject(DialogService);
  private reportsService = inject(ReportsService);
  private contactRequestService = inject(ContactRequestService);
  private userContext = inject(UserContext);
  deletePost() {
    const dialogRef= this.dialogService.openDialog(DeleteDialog,{entity:'publicación'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       this.service.delete(this.post().id!).subscribe();
      }
    });
  }
  protected readonly environment = environment;


  openConfirmationDialogToReport() {

    const dialogRef= this.dialogService.openDialog(ReportPostDialog);
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.reportsService.createReport({postId: this.post().id!,reason: result}).subscribe();
      }
    });

  }

  openConfirmationDialogToRequire() {
    const dialogRef= this.dialogService.openDialog(ConfirmationDialog,{action:'ver','message':'¿Deseas solicitar contactar al autor de esta publicación?'})
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.contactRequestService.create(this.CreateContactRequest()).subscribe();
      }

    })
  }

  private CreateContactRequest() : CreateContactRequest{
    return {
      postId : this.post().id!,
      ownerId : this.post().user!.id!,
      requesterId :this.userContext.getUser()().id! ?? '',
      status : 'Pending'

    }
  }
}
