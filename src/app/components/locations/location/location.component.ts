import {Component, inject, input, output} from '@angular/core';
import {Location} from '@model/model/location';
import {Button} from '@app/components/shared/button/button';
import {Session} from '@services/utils/session';
import {DialogService} from '@services/utils/dialog-service';
import {DeleteDialog} from '@app/components/shared/delete-dialog/delete-dialog';
import {LocationService} from '@http/location-service';

@Component({
  selector: 'app-location',
  imports: [
    Button
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  readonly location = input.required<Location>();
  readonly forumSlug = input<string>();
  private session = inject(Session);
  private service = inject(LocationService);
  private dialogService = inject(DialogService);
  $admin = this.session.$admin;
  selected = output<Location>();
  openDeleteDialog(): void {
    const dialogRef= this.dialogService.openDialog(DeleteDialog,{entity:'ubicación'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.delete(this.location().id!).subscribe();
      }
    });
  }
}
