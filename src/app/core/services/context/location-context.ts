import {Injectable, signal} from '@angular/core';
import {Location} from '@model/model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationContext {
  private location = signal<Location>({}as Location);

  setLocation(location: Location) {
    this.location.set(location);
  }
  getLocation() {
    return this.location;
  }

}
