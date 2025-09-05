import {Component, computed, effect, inject, input, linkedSignal, signal} from '@angular/core';
import {EntryList} from '@app/components/entries/entry-list/entry-list';
import {rxResource} from '@angular/core/rxjs-interop';
import {JournalService} from '@http/journal-service';
import {EntrySkeleton} from '@app/components/entries/entry-skeleton/entry-skeleton';
import {EventService} from '@services/context/event-service';

@Component({
  selector: 'app-animal-entries',
  imports: [
    EntryList,
    EntrySkeleton
  ],
  templateUrl: './animal-entries.html',
  styleUrl: './animal-entries.scss'
})
export class AnimalEntries {
  private service = inject(JournalService);
  private eventService = inject(EventService);
  readonly totalItems = input.required<number>();
  items = linkedSignal(()=>this.totalItems());
  readonly journalSlug = input('');
  page = signal<number>(1);
  reload = computed(()=>this.eventService.getEvents()())

  constructor() {
    effect(() => {
      this.reload();
      const reloadEvents = this.reload();
      if (
        Array.isArray(reloadEvents)
        && reloadEvents.length > 0
        && reloadEvents[reloadEvents.length - 1].action === 'delete'
        && reloadEvents[reloadEvents.length - 1].entity === 'entry'
      ) {
        this.items.update((prev) => prev - 1);
      }
      this.entriesResource.reload();
    });
  }

  entriesResource = rxResource({
    params: () => {
      return {
        slug: this.journalSlug(),
        page: this.page(),
      };
    },
    stream: ({params}) =>
      this.service.getEntries(params.slug, params.page),
  });

  changePage(page: number) {
    this.page.set(page);
  }
}
