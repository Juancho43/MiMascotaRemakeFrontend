import {Component, inject, input} from '@angular/core';
import { JournalService } from '@app/core/services/http/journal-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {DatePipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-journal-detail',
  imports: [
    DatePipe
  ],
  templateUrl: './journal-detail.html',
  styleUrl: './journal-detail.scss'
})
export default class JournalDetail {
  readonly id = input.required<string>();
  private service = inject(JournalService);
  journalResource = rxResource({
    params: () => ({id: this.id()}),
    stream: ({params}) => this.service.getJournal(params.id),
  });
}
