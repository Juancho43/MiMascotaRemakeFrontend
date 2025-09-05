import {Component, inject, input} from '@angular/core';
import {Forum} from '@model/model/forum';
import {Button} from '@app/components/shared/button/button';
import {Location} from '@model/model/location';
import {ForumLocation} from '@app/components/forums/forum-location/forum-location';
import {DialogService} from '@services/utils/dialog-service';
import {ForumService} from '@http/forum-service';
import {DeleteDialog} from '@app/components/shared/delete-dialog/delete-dialog';
import {OverlayService} from '@services/utils/overlay.service';
import {ForumContext} from '@services/context/forum-context.service';

@Component({
  selector: 'app-forum-detail',
  imports: [
    Button,


  ],
  templateUrl: './forum-detail.html',
  styleUrl: './forum-detail.scss'
})
export class ForumDetail {
  readonly forum = input.required<Forum>();
  readonly editable = input<boolean>(false);
  readonly location = input<Location>();
  private dialogService = inject(DialogService);
  private service = inject(ForumService);
  private overlay = inject(OverlayService);
  private context = inject(ForumContext);
  open(){
    this.context.setForum(this.forum());
    this.overlay.open(ForumLocation, this.overlay.createTopPositionStrategy());
  }

  openDeleteDialog(): void {
    const dialogRef= this.dialogService.openDialog(DeleteDialog,{entity:'foro'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.delete(this.forum().id!).subscribe();
      }
    });
  }
}

