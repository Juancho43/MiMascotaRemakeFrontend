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
import {DeleteAnimalImage} from '@model/command/DeleteAnimalImage';
import {EventService} from '@services/context/event-service';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private http = inject(HttpClient);
  private notification = inject(NotificationService);
  private eventContext = inject(EventService);
  getJournals() {
    return this.http.get<ApiResponseCollection<Animal>>(environment.api_url+journalEndpoint.getJournals, {context: checkToken()});
  }

  getJournal(slug: string) {
    if (slug === undefined){
      return of();
    }
    return this.http.get<ApiResponse<Journal>>(environment.api_url+journalEndpoint.getJournal.replace(':slug', slug), {context: checkToken()}).pipe(
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }
  postJournal(data: Journal) {
    return this.http.post<ApiResponse<Journal>>(environment.api_url+journalEndpoint.createJournal, data.animal, {context: checkToken()}).pipe(
      tap(() => {
        this.notification.showSuccessNotification('Libreta creada correctamente');
      }),
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }

  putJournal(data: Journal) {
    return this.http.put<ApiResponse<Journal>>(environment.api_url+journalEndpoint.updateJournal, data.animal, {context: checkToken()}).pipe(
      tap(() => {
        this.notification.showSuccessNotification('Libreta actualizada correctamente');
      }),
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }
  deleteJournal(id: string) {
    return this.http.delete<ApiResponse<Animal>>(environment.api_url+journalEndpoint.deleteJournal.replace(':id', id), {context: checkToken()}).pipe(
      tap(() => {
        this.notification.showSuccessNotification('Libreta eliminada correctamente');
      }),
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }

  getEntries(journalId: string, page : number) {
    const url = environment.api_url + journalEndpoint.getEntries.replace(':slug', journalId).replace(':page', page.toString());
    return this.http.get<ApiResponseCollection<Entry>>(url, {context: checkToken()}).pipe(
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }
  getAnimalImages(slug: string) {
    const url = environment.api_url + animalEndpoint.images.replace(':slug', slug);
    return this.http.get<ApiResponse<ImagesResponse>>(url, {context: checkToken()}).pipe(
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }

  deleteAnimalImage(data : DeleteAnimalImage) {
    const url = environment.api_url + animalEndpoint.deleteImage;
    return this.http.put(
      url,
      data,
      {context: checkToken()}
    ).pipe(
      tap( () => {
        this.notification.showSuccessNotification('Imagen eliminada correctamente');
        this.eventContext.emit<any>({data: {}, timestamp: new Date(), action: 'delete', entity:'AnimalImage'})

      }
      )
    );
  }
}
