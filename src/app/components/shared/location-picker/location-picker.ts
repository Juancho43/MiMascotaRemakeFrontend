import {AfterViewInit, Component, Inject, output, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
    selector: 'app-location-picker',
    imports: [],
    templateUrl: './location-picker.html',
    styleUrl: './location-picker.scss'
  })
  export class LocationPicker implements AfterViewInit {

    coordinatesSelected = output<{ lat: number, lng: number }>();
    private map: any;
    private marker: any;
    latitude: number | null = null;
    longitude: number | null = null;
    L: any = null; // Store Leaflet instance here

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.loadLeaflet();
      }
    }

    private async loadLeaflet(): Promise<void> {
      try {
        // Dynamically import Leaflet only in browser
        this.L = await import('leaflet');
        this.initMap();
      } catch (error) {
        console.error('Failed to load Leaflet:', error);
      }
    }

    private initMap(): void {
      if (!this.L) return;

      // Set default view to center of Argentina
      this.map = this.L.map('map').setView([-34.603722, -58.381592], 13);

      this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      // Add click event to get coordinates
      this.map.on('click', (e: any) => {
        this.setMarker(e.latlng.lat, e.latlng.lng);
      });

      // Try to get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            this.map.setView([lat, lng], 15);
            this.setMarker(lat, lng);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      }
    }

    private setMarker(lat: number, lng: number): void {
      if (!this.L) return;

      this.latitude = lat;
      this.longitude = lng;

      if (this.marker) {
        this.map.removeLayer(this.marker);
      }

      this.marker = this.L.marker([lat, lng]).addTo(this.map)
        .bindPopup('Ubicación seleccionada').openPopup();

      this.coordinatesSelected.emit({lat, lng});
    }
  }
