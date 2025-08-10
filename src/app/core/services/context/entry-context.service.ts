import {Injectable, signal} from '@angular/core';
import {Entry} from '@model/model/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryContext {
 private entry = signal<Entry>({} as Entry);
  getEntry() {
    return this.entry;
  }
  setEntry(entry: Entry) {
    if (entry !== this.entry()) this.entry.set(entry);
  }
  clearEntry() {
    this.entry.set({} as Entry);
  }
}
