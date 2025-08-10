import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '@services/utils/notification.service';
import {Entry} from '@model/model/entry';
import {ApiResponse} from '@model/ApiResponse';
import {environment} from '@environments/environment.development';
import {entryEndpoint} from '@core/endpoints/entry.endpoint';
import {checkToken} from '@core/other/token.interceptor';
import {catchError, Observable, of, tap} from 'rxjs';
import {ICrudeable} from '@model/ICrudeable';
import { ApiResponseCollection } from "@app/core/interfaces/ApiResponseCollection";

@Injectable({
  providedIn: 'root'
})
export class EntryService implements ICrudeable<Entry> {

  private http = inject(HttpClient);
  private notification = inject(NotificationService);

  public create(item : Entry): Observable<ApiResponse<Entry>> {
    return this.http.post<ApiResponse<Entry>>
    (
      environment.api_url+entryEndpoint.create,
      item,
      {context:checkToken()}
    ).pipe(
      tap(() => {
        this.notification.showSuccesNotification('Entry created successfully');
      }),
      catchError((error) => {
        this.notification.showErrorNotification();
        return of()
      })
    );
  }

  public update(entry: Entry): Observable<ApiResponse<Entry>> {
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
        this.notification.showErrorNotification();
        return of();
      })
    );
  }
  delete(id: string): any{
    return this.http.delete(
      environment.api_url + entryEndpoint.delete.replace(':id',id),
      {context: checkToken()}

    );
  }
  getAll(): Observable<ApiResponseCollection<Entry[]>> {
    throw new Error("Method not implemented.");
  }
  getById(id: string): Observable<ApiResponse<Entry>> {
    throw new Error("Method not implemented.");
  }
}
