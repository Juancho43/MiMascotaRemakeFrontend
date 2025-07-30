import {Component, input} from '@angular/core';
import {Entry} from '@model/model/entry';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-entry',
  imports: [
    DatePipe
  ],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class EntryComponent {
readonly entry = input.required<Entry>();
}
