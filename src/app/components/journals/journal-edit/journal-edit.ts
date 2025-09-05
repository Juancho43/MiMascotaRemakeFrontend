import {Component, computed, inject} from '@angular/core';
import {JournalForm} from '@app/components/journals/journal-form/journal-form';
import {Router} from '@angular/router';
import {Journal} from '@model/model/journal';
import {JournalContextService} from '@services/context/journal-context-service';

@Component({
  selector: 'app-journal-edit',
  imports: [
    JournalForm
  ],
  templateUrl: './journal-edit.html',
  styleUrl: './journal-edit.scss'
})
export default class JournalEdit {
  private router = inject(Router);
  private contextService = inject(JournalContextService);
  journal = computed(()=> this.contextService.getJournal()());

  onSubmittedHandler($event: Journal)
  {
    this.router.navigate(['/app/journals/', $event.journal_slug!, 'view'] );
  }
}
