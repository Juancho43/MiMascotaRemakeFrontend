import {Component, inject} from '@angular/core';
import {EntryForm} from '@app/components/entries/entry-form/entry-form';
import {BackButton} from '@app/components/shared/back-button/back-button';
import {Router} from '@angular/router';
import {JournalContextService} from '@services/context/journal-context-service';


@Component({
  selector: 'app-entry-new',
  imports: [
    EntryForm,
    BackButton
  ],
  templateUrl: './entry-new.html',
  standalone: true,
  styleUrl: './entry-new.scss'
})
export default class EntryNew {

  private router = inject(Router);
  private journalContext = inject(JournalContextService);

  onSubmittedHandler()
  {
    const slug = this.journalContext.getJournal()().journal_slug!;
    this.router.navigate(['/app/journals/', slug, 'view'] );
  }

}
