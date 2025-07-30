import {Component, input} from '@angular/core';
import {Entry} from '@model/model/entry';
import {EntryComponent} from '@app/components/entries/entry/entry.component';

@Component({
  selector: 'app-entry-list',
  imports: [
    EntryComponent
  ],
  templateUrl: './entry-list.html',
  styleUrl: './entry-list.scss'
})
export class EntryList {
  readonly entries = input.required<Entry[]>();
}
