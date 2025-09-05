import {Injectable, signal} from '@angular/core';

export interface Event<T> {
  data?: T,
  timestamp: Date,
  entity : string,
  action: 'create' | 'update' | 'delete',
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
 private events  = signal<Event<any>[]>([]);
  constructor() { }

  emit<T>(event: Event<T>): void {
    this.events.set([...this.events(), event]);
  }

  getEvents() {
    return this.events;
  }
}
