import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment.development';
import {journalEndpoint} from '@core/endpoints/journal.endpoint';
import {checkToken} from '@core/other/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private http = inject(HttpClient);

  getJournals() {
    return this.http.get(environment.api_url+journalEndpoint.getJournals, {context: checkToken()});
  }

}
