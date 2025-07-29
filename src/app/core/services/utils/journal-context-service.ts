import {inject, Injectable, signal} from '@angular/core';
import {Journal} from '@model/model/journal';
import {rxResource} from '@angular/core/rxjs-interop';
import {JournalService} from '@http/journal-service';

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
