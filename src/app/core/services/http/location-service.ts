import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {ApiResponse} from '@model/ApiResponse';
import {Location} from '@model/model/location';
import {checkToken} from '@core/other/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private http = inject(HttpClient);

  getLocationById(stringId: string) {
    const url = environment.api_url + '/locations/' + stringId;
    return this.http.get<ApiResponse<Location>>(url);
  }
  getLocations(page: number=1, limit: number = 100) {
    const url = environment.api_url + '/locations/'+page+'/' + limit;
    return this.http.get<ApiResponse<Location[]>>(url);
  }

  searchLocations(query: string) {
    const url = environment.api_url + '/locations/search/' + query;
    return this.http.get<ApiResponse<Location[]>>(url);
  }

  delete(id: string) {
    const url = environment.api_url + '/locations/delete/' + id;
    return this.http.delete(url,{context : checkToken()})
  }

}
