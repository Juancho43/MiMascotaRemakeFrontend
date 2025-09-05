import {Component, inject, linkedSignal, signal} from '@angular/core';
import {LocationService} from '@http/location-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {LocationList} from '@app/components/locations/location-list/location-list';
import {ForumContext} from '@services/context/forum-context.service';
import {LocationsListSkeleton} from '@app/components/locations/locations-list-skeleton/locations-list-skeleton';

@Component({
  selector: 'app-forum-location',
  imports: [
    LocationList,
    LocationsListSkeleton
  ],
  templateUrl: './forum-location.html',
  styleUrl: './forum-location.scss'
})
export class ForumLocation {
  private service = inject(LocationService);
  private forumContext = inject(ForumContext);
  readonly slug = linkedSignal<string>(()=> this.forumContext.getForum()()?.slug!);
  readonly page = signal(1);
  readonly limit = signal(100);
  locationsResource = rxResource({
    params: () => ({ page: this.page(), limit:this.limit() }),
    stream: ({ params }) => this.service.getLocations(params.page, params.limit)
  })
}
