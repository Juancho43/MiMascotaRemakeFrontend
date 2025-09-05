import {Component, inject, linkedSignal} from '@angular/core';

import {JournalContextService} from '@services/context/journal-context-service';
import {environment} from '@environments/environment';
import {AnimalImages} from '@app/components/animals/animal-images/animal-images';
import {AnimalEntries} from '@app/components/animals/animal-entries/animal-entries';
import {AnimalData} from '@app/components/animals/animal-data/animal-data';


@Component({
  selector: 'app-journal-detail',
  imports: [
    AnimalImages,
    AnimalEntries,
    AnimalData
  ],
  templateUrl: './journal-detail.html',
  styleUrl: './journal-detail.scss'
})
export default class JournalDetail {
  private context = inject(JournalContextService);

  journal = linkedSignal(()=>this.context.getJournal()())

}
