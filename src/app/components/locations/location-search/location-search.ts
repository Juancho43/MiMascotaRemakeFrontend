import {Component, inject, output, signal} from '@angular/core';
import {LocationService} from '@http/location-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {Location} from '@model/model/location';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-location-search',
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './location-search.html',
  styleUrl: './location-search.scss'
})
export class LocationSearch {
  private service = inject(LocationService);

  searchInput = signal('buenos aires');
  locationResource = rxResource({
    params: () => ({query: this.searchInput()}),
    stream: ({params}) => this.service.searchLocations(params.query)
  })

  result = output<Location[]>();


  onSearchChange() {
    if (!this.locationResource.isLoading()){
      let data = this.locationResource.value()!.data!;
      this.result.emit(data);
    }
  }
}
