import {Component, inject, signal} from '@angular/core';
import {JournalService} from '@app/core/services/http/journal-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {DatePipe, NgOptimizedImage} from '@angular/common';

import {JournalContextService} from '@services/utils/journal-context-service';
import {environment} from '@environments/environment';
import {EntryList} from '@app/components/entries/entry-list/entry-list';
import {SizePipe} from '@core/pipes/size-pipe-pipe';
import {GenderPipe} from '@core/pipes/gender-pipe';

@Component({
  selector: 'app-journal-detail',
  imports: [
    DatePipe,
    NgOptimizedImage,
    EntryList,
    SizePipe,
    GenderPipe
  ],
  templateUrl: './journal-detail.html',
  styleUrl: './journal-detail.scss'
})
export default class JournalDetail {
  private context = inject(JournalContextService);
  private service = inject(JournalService);
  journal =this.context.getJournal() ?? signal(null);
  page = signal<number>(1);
  animalImagesResource = rxResource({
    params: () => ({id: this.journal()? this.journal()!.id! : ''}),
    stream: ({params}) => this.service.getAnimalImages(params.id),
  })
  entriesResource = rxResource({
    params: () => ({id: this.journal()? this.journal()!.id! : '', page: this.page(),}),
    stream: ({params}) => this.service.getEntries(params.id, params.page),
  });

  protected readonly environment = environment;
}
