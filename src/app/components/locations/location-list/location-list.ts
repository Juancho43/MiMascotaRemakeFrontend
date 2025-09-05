import {Component, inject, input, linkedSignal} from '@angular/core';
import {Location} from '@model/model/location';
import {LocationComponent} from '@app/components/locations/location/location.component';
import {LocationSearch} from '@app/components/locations/location-search/location-search';
import {LocationContext} from '@services/context/location-context';

@Component({
  selector: 'app-location-list',
  imports: [
    LocationComponent,
    LocationSearch
  ],
  templateUrl: './location-list.html',
  styleUrl: './location-list.scss'
})
export class LocationList {
  readonly locations = input<Location[]>();
  readonly forumSlug = input<string>();
  protected readonly location = location;
  currentLocations  = linkedSignal(()=> this.locations() || []);
  private context = inject(LocationContext);
  onSelectHandler(location: Location) {
    this.context.setLocation(location);
  }
}
