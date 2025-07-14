import {Component, inject} from '@angular/core';
import {JournalService} from '@http/journal-service';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-journal-page',
  imports: [],
  templateUrl: './journal-page.html',
  styleUrl: './journal-page.scss',
  standalone: true,
})
export default class JournalPage {
  private service = inject(JournalService);


  journalsResource = rxResource({
    stream : () => this.service.getJournals(),
  });
}
