import {Component, input, output} from '@angular/core';
import {Entry} from '@model/model/entry';
import {EntryComponent} from '@app/components/entries/entry/entry.component';
import {Pagination} from '@app/components/shared/pagination/pagination';

@Component({
  selector: 'app-entry-list',
  imports: [
    EntryComponent,
    Pagination
  ],
  templateUrl: './entry-list.html',
  styleUrl: './entry-list.scss'
})
export class EntryList {
  readonly entries = input.required<Entry[]>();
  totalItems = input.required<number>();
  page = output<number>();
  currentPage = input<number>(1);

  changePage($event: number) {
   this.page.emit($event)
  }
}
