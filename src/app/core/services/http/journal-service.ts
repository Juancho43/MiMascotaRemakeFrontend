import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment.development';
import {journalEndpoint} from '@core/endpoints/journal.endpoint';
import {checkToken} from '@core/other/token.interceptor';
import {Journal} from '@model/model/journal';
import {catchError, of, tap} from 'rxjs';
import {NotificationService} from '@services/utils/notification.service';
import {ApiResponseCollection} from '@model/ApiResponseCollection';
import {Animal} from '@model/model/animal';
import {ApiResponse} from '@model/ApiResponse';
import {animalEndpoint} from '@core/endpoints/animal.endpoint';
import {ImagesResponse} from '@model/model/ImagesResponse';
import {Entry} from '@model/model/entry';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private http = inject(HttpClient);
  private notification = inject(NotificationService);

  getJournals() {
    return this.http.get<ApiResponseCollection<Animal>>(environment.api_url+journalEndpoint.getJournals, {context: checkToken()});
  }

  getJournal(id: string) {
    return this.http.get<ApiResponse<Journal>>(environment.api_url+journalEndpoint.getJournal.replace(':id', id), {context: checkToken()}).pipe(
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }
  postJournal(data: Journal) {
    return this.http.post<ApiResponse<Animal>>(environment.api_url+journalEndpoint.createJournal, data.animal, {context: checkToken()}).pipe(
      tap(() => {
        this.notification.showSuccesNotification('Libreta creada correctamente');
      }),
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }

  putJournal(data: Journal) {
    return this.http.put<ApiResponse<Animal>>(environment.api_url+journalEndpoint.updateJournal, data.animal, {context: checkToken()}).pipe(
      tap(() => {
        this.notification.showSuccesNotification('Libreta actualizada correctamente');
      }),
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }
  getAnimalImages(animalId: string) {
    return this.http.get<ApiResponse<ImagesResponse>>(environment.api_url + animalEndpoint.images.replace(':id', animalId), {context: checkToken()}).pipe(
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }

  getEntries(journalId: string, page : number) {
    const url = environment.api_url + journalEndpoint.getEntries.replace(':id', journalId).replace(':page', page.toString());
    return this.http.get<ApiResponseCollection<Entry>>(url, {context: checkToken()}).pipe(
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }
}
