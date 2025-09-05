import {Component, inject} from '@angular/core';
import {Button} from '@app/components/shared/button/button';
import {DialogService} from '@services/utils/dialog-service';
import {DeleteDialog} from '@app/components/shared/delete-dialog/delete-dialog';
import {JournalService} from '@http/journal-service';
import {JournalContextService} from '@services/context/journal-context-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-journal-button',
  imports: [
    Button
  ],
  templateUrl: './delete-journal-button.html',
  styleUrl: './delete-journal-button.scss'
})
export class DeleteJournalButton {
  private modal = inject(DialogService);
  private service = inject(JournalService);
  private context = inject(JournalContextService);
  private router = inject(Router);
  onDeleteHandle() {
    const ref = this.modal.openDialog(DeleteDialog,{entity:'libreta'});
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteJournal(this.context.getJournal()().id!).subscribe();
        this.router.navigate(['/app/journals/all']);
      }
    });
  }
}
