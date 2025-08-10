import {Component, effect, inject, input} from '@angular/core';
import {Button} from "@app/components/shared/button/button";
import {RouterOutlet} from '@angular/router';
import {JournalContextService} from '@services/context/journal-context-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {JournalService} from '@http/journal-service';
import {Journal} from '@model/model/journal';
import {DialogService} from '@services/utils/dialog-service';
import {DeleteDialog} from '@app/components/shared/delete-dialog/delete-dialog';

@Component({
  selector: 'app-journal-view',
  imports: [
    Button,
    RouterOutlet
  ],
  templateUrl: './journal-view.html',
  styleUrl: './journal-view.scss'
})
export default class JournalView  {
  readonly id = input.required<string>();
  private journalContextService = inject(JournalContextService);
  private dialogService = inject(DialogService);
  private service = inject(JournalService);

  journalResource = rxResource({
    params: () => ({id: this.id()}),
    stream: ({params}) => this.service.getJournal(params.id),
  });

  constructor() {
    // Effect se ejecuta automáticamente cuando cambia el resource
    effect(() => {
      if (this.journalResource.hasValue() && !this.journalResource.isLoading()) {
        console.log('Setting journal in context:', this.journalResource.value());
        this.journalContextService.setJournal(this.toJournal());
      }
    });
  }

  openDeleteDialog(): void {
    const dialogRef= this.dialogService.openDialog(DeleteDialog,{entity:'diário'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteJournal(this.journalResource.value()!.data!.id!).subscribe();
      }
    });
  }

  toJournal(): Journal {
    return {
      id: this.id(),
      animal: this.journalResource.value()!.data!.animal,
      entryCount: this.journalResource.value()!.data!.entryCount,
      user_id: this.journalResource.value()!.data!.user_id,
    }
  }
}
