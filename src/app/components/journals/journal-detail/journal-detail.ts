import {Component, effect, inject, signal} from '@angular/core';
import {JournalService} from '@app/core/services/http/journal-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {DatePipe, NgOptimizedImage} from '@angular/common';

import {JournalContextService} from '@services/context/journal-context-service';
import {environment} from '@environments/environment';
import {EntryList} from '@app/components/entries/entry-list/entry-list';
import {SizePipe} from '@core/pipes/size-pipe-pipe';
import {GenderPipe} from '@core/pipes/gender-pipe';
import {Journal} from '@model/model/journal';
import {AnimalImages} from '@app/components/images/animal-images/animal-images';


@Component({
  selector: 'app-journal-detail',
  imports: [
    DatePipe,
    NgOptimizedImage,
    EntryList,
    SizePipe,
    GenderPipe,
    AnimalImages
  ],
  templateUrl: './journal-detail.html',
  styleUrl: './journal-detail.scss'
})
export default class JournalDetail {
  protected readonly environment = environment;
  private context = inject(JournalContextService);
  private service = inject(JournalService);
  journal = signal<Journal>({} as Journal);
  page = signal<number>(1);
  animalImagesResource = rxResource({
    params: () => ({id: this.journal()? this.journal()!.id! : ''}),
    stream: ({params}) => this.service.getAnimalImages(params.id),
  })
  entriesResource = rxResource({
    params: () => ({id: this.journal()? this.journal()!.id! : '', page: this.page(),}),
    stream: ({params}) => this.service.getEntries(params.id, params.page),
  });
constructor() {
  this.journal = this.context.getJournal();
  effect(() => {
    console.log('Journal Detail Effect' + this.journal()!.id!);
    // this.journal()!.id!
  });
}
  changePage(page: number) {
    this.page.set(page);
  }
}
