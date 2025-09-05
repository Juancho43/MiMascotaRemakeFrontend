import {Component, inject} from '@angular/core';
import {JournalCard} from '@app/components/journals/journal-card/journal-card';
import {JournalService} from '@http/journal-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {JournalSkeleton} from '@app/components/journals/journal-skeleton/journal-skeleton';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-journal-list',
  imports: [
    JournalCard,
    JournalSkeleton,
    RouterLink
  ],
  templateUrl: './journal-list.html',
  styleUrl: './journal-list.scss'
})
export default class JournalList {
  private service = inject(JournalService);
  journalsResource = rxResource({
    stream : () => this.service.getJournals(),
  })

}
