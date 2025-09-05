import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '@services/utils/notification.service';
import {EventService} from '@services/context/event-service';
import {contactRequestEndpoint} from '@core/endpoints/contacRequest.endpoint';
import {environment} from '@environments/environment';
import {ApiResponse} from '@model/ApiResponse';
import {Entity} from '@model/model/entity';
import {checkToken} from '@core/other/token.interceptor';
import {tap} from 'rxjs';

export interface ContactRequest extends Entity{
  requester : {
    id: string,
    name: string,
  },
  owner : {
    id: string,
    name: string,
    telephone: string
  },
  post:{
    id: string,
    title: string,
    animal : string

  },
  status: string

}
export interface CreateContactRequest{
  requesterId : string,
  ownerId : string,
  postId : string,
  status : string
}
export interface ResolveContactRequest{
  id:string,
  status: string
}


@Injectable({
  providedIn: 'root'
})
export class ContactRequestService {
 private http = inject(HttpClient);
 private notification = inject(NotificationService);
 private eventService = inject(EventService);

 getStatus(){
   const url = environment.api_url + contactRequestEndpoint.status;
    return this.http.get<ApiResponse<string[]>>(url);
 }

  getByOwner(id : string){
    const url = environment.api_url + contactRequestEndpoint.getByOwner(id);
      return this.http.get<ApiResponse<ContactRequest[]>>(url,{context: checkToken()});
  }

  getByRequester(id : string){
    const url = environment.api_url + contactRequestEndpoint.getByRequester(id);
      return this.http.get<ApiResponse<ContactRequest[]>>(url,{context: checkToken()});
  }

  create(request : CreateContactRequest){
    const url = environment.api_url + contactRequestEndpoint.create;
      return this.http.post<ApiResponse<ContactRequest>>(url, request, {context: checkToken()}).pipe(
        tap(
        {
          next : (response) => {
            this.notification.showSuccessNotification(response.message!);
            this.eventService.emit({action:'create',timestamp : new Date(), data:response.data, entity:'contactRequest'});
          },
          error : (error) => {
            this.notification.showErrorNotification('Error creating contact request');

          }
        }
        )
      );
  }

  resolve(request: ResolveContactRequest){
    const url = environment.api_url + contactRequestEndpoint.resolve;
      return this.http.put<ApiResponse<ContactRequest>>(url, request, {context: checkToken()}).pipe(
      tap(
        {
          next : (response) => {
            this.notification.showSuccessNotification(response.message!);
            this.eventService.emit({action:'update',timestamp : new Date(), data:response.data, entity:'contactRequest'});
          },
          error : (error) => {
            this.notification.showErrorNotification('Error resolving contact request');

          }
        }
      )
    );
  }

}
