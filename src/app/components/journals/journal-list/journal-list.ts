import {Component, inject} from '@angular/core';
import {JournalCard} from '@app/components/journals/journal-card/journal-card';
import {JournalService} from '@http/journal-service';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-journal-list',
  imports: [
    JournalCard
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
