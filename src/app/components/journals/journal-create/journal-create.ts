import {Component, inject} from '@angular/core';
import {JournalForm} from '@app/components/journals/journal-form/journal-form';
import {Router} from '@angular/router';
import {Journal} from '@model/model/journal';

@Component({
  selector: 'app-journal-create',
  imports: [
    JournalForm
  ],
  templateUrl: './journal-create.html',
  styleUrl: './journal-create.scss'
})
export default class JournalCreate {
  private router = inject(Router);


  onSubmittedHandler($event: Journal)
  {
    this.router.navigate(['/app/journals/', $event.journal_slug!, 'view'] );
  }
}
