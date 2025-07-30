import {Injectable, signal} from '@angular/core';
import {Journal} from '@model/model/journal';

@Injectable({
  providedIn: 'root'
})
export class JournalContextService {
  private journal  = signal<Journal | null>(null);

  setJournal(journal: Journal ): void {
    this.journal.set(journal);

  }
  getJournal(){
    return this.journal;
  }
}
