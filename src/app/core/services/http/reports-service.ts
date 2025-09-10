import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '@services/utils/notification.service';
import {environment} from '@environments/environment.development';

import {checkToken} from '@core/other/token.interceptor';
import {tap} from 'rxjs';
import {EventService} from '@services/context/event-service';
import {ApiResponse} from '@model/ApiResponse';
import {Entity} from '@model/model/entity';
export interface Report extends Entity{
  reporter: {
    id: string;
    name: string;
    email: string;
  };
  reportedPost: {
    id: string;
    title: string;
    slug: string;
  };
  reason: any;
  status: string;
}

export interface ReportUpdateDTO{
  reportId: string;
  status:  string;
}
@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private http = inject(HttpClient);
  private notification = inject(NotificationService);
  private eventService = inject(EventService);

  getReportReasons(){
    const url = environment.api_url + '/reports/reasons';
    return this.http.get<ApiResponse<string[]>>(url);
  }

  createReport(data :{postId : string, reason: string}){
    const url = environment.api_url + '/reports/post';
    return this.http.post(url,data, {context: checkToken()}).pipe(
      tap({
        next: (response) => {
          this.notification.showSuccessNotification('Reporte creado con éxito');
          this.eventService.emit<any>({action: 'create', timestamp: new Date(), entity:'report'});
        },
        error: (error) => {
          this.notification.showErrorNotification('No se pudo actualizar.');
        }
      })
    );
  }

  updateReport(data : ReportUpdateDTO){
    const url = environment.api_url + '/reports/update';
    return this.http.put<ApiResponse<Report>>(url, data, {context: checkToken()}).pipe(
       tap({
        next: (response) => {
          this.notification.showSuccessNotification('Reporte actualizado con éxito');
          this.eventService.emit<any>({action: 'update', timestamp: new Date(), entity:'report'});
        },
        error: (error) => {
          this.notification.showErrorNotification('No se pudo actualizar.');
        }
      })
    )
  }
  getReports(data: {forumSlug : string, locationSlug: string, page : number, limit: number}){
    const url = environment.api_url + `/reports/by/${data.locationSlug}/${data.forumSlug}/${data.page}/${data.limit}`
    return this.http.get<ApiResponse<Report[]>>(url,{context:checkToken()});
  }
}
