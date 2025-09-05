import {Component, inject} from '@angular/core';
import {EntryForm} from '@app/components/entries/entry-form/entry-form';
import {EntryContext} from '@services/context/entry-context.service';
import {BackButton} from '@app/components/shared/back-button/back-button';
import {Router} from '@angular/router';
import {JournalContextService} from '@services/context/journal-context-service';

@Component({
  selector: 'app-entry-edit',
  imports: [

    EntryForm,
    BackButton
  ],
  templateUrl: './entry-edit.html',
  standalone: true,
  styleUrl: './entry-edit.scss'
})
export default class EntryEdit {
  private context = inject(EntryContext);
  private router = inject(Router);
  private journalContext = inject(JournalContextService);

  getEntry() {
    return this.context.getEntry();
  }
  onSubmitHandler(){
    const slug = this.journalContext.getJournal()().journal_slug!;
    this.router.navigate(['/app/journals/', slug, 'view'] );
  }
}
