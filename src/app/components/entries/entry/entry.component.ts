import {Component, inject, input} from '@angular/core';
import {Entry} from '@model/model/entry';
import {DatePipe} from '@angular/common';
import {Button} from '@app/components/shared/button/button';
import {DialogService} from '@services/utils/dialog-service';
import {DeleteDialog} from '@app/components/shared/delete-dialog/delete-dialog';
import {EntryService} from '@http/entry-service';
import {EntryContext} from '@services/context/entry-context.service';

@Component({
  selector: 'app-entry',
  imports: [
    DatePipe,
    Button

  ],
  templateUrl: './entry.component.html',
  standalone: true,
  styleUrl: './entry.component.scss'
})
export class EntryComponent {
  readonly entry = input.required<Entry>();
  private entryService = inject(EntryService);
  private entryContext = inject(EntryContext);
  private dialogService = inject(DialogService);

  openDeleteDialog(): void {
    const dialogRef= this.dialogService.openDialog(DeleteDialog,{entity:'registro'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.entryService.delete(this.entry().id!).subscribe();
      }
    });
  }

  onEditHandler() {
    this.entryContext.setEntry(this.entry());
  }
}
