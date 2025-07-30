import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '@services/utils/notification.service';
import {Entry} from '@model/model/entry';
import {ApiResponse} from '@model/ApiResponse';
import {environment} from '@environments/environment.development';
import {entryEndpoint} from '@core/endpoints/entry.endpoint';
import {checkToken} from '@core/other/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private http = inject(HttpClient);
  private notification = inject(NotificationService);

  public create(entry : Entry)
  {
    return this.http.post<ApiResponse<Entry>>
    (
      environment.api_url+entryEndpoint.create,
      entry,
      {context:checkToken()}
    ).pipe(
      tap(() => {
        this.notification.showSuccesNotification('Entry created successfully');
      }),
      catchError((error) => {
        this.notification.showErrorNotification('Failed to create entry');
        return of(error);
      })
    );
  }

  public update(entry: Entry) {
    return this.http.put<ApiResponse<Entry>>
    (
      environment.api_url+entryEndpoint.update,
      entry,
      {context:checkToken()}
    ).pipe(
      tap(() => {
        this.notification.showSuccesNotification('Entry updated successfully');
      }),
      catchError((error) => {
        this.notification.showErrorNotification('Failed to update entry');
        return of(error);
      })
    );
  }
}
