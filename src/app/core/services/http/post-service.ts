import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '@model/model/post';
import {environment} from '@environments/environment.development';
import {checkToken} from '@core/other/token.interceptor';
import {ApiResponse} from '@model/ApiResponse';
import {postEndpoint} from '@core/endpoints/post.endpoint';
import {NotificationService} from '@services/utils/notification.service';
import {tap} from 'rxjs';
import {EventService} from '@services/context/event-service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http = inject(HttpClient);
  private notification = inject(NotificationService);
  private eventService = inject(EventService);
  create(post: Post) {
    const url = environment.api_url + postEndpoint.create;
    return this.http.post<ApiResponse<Post>>(url, post, {context:checkToken()}).pipe(
      tap(
        {
          next: (response) => {
            this.notification.showSuccessNotification('Publicación creada con éxito');
            this.eventService.emit<Post>({action: 'create', data: response.data!, timestamp: new Date(), entity:'post'});
          },
          error: (error) => {
            this.notification.showErrorNotification('Error al crear la publicación');
          }
        }
      )
    )
      ;
  }
  update(post: Post) {
    const url = environment.api_url + postEndpoint.edit;
    return this.http.put<ApiResponse<Post>>(url, post, {context:checkToken()}).pipe(
      tap(
        {
          next: (response) => {
            this.notification.showSuccessNotification('Publicación actualizada con éxito');
            this.eventService.emit<Post>({action: 'update', data: response.data!, timestamp: new Date(), entity:'post'});
          },
          error: (error) => {
            this.notification.showErrorNotification('Error al actualizar la publicación');
          }
        }
      )
    );
  }
  getPost(postId: string) {
    const url = environment.api_url + postEndpoint.view.replace(':id',postId);
    return this.http.get<ApiResponse<Post>>(url);
  }
  getAllUserPosts() {
    const url = environment.api_url + postEndpoint.user;
    return this.http.get<ApiResponse<Post[]>>(url, {context:checkToken()});
  }
  delete(postId : string){
    const url = environment.api_url + postEndpoint.delete.replace(':id',postId);
    return this.http.delete<ApiResponse<boolean>>(url, {context:checkToken()}).pipe(
      tap({
        next: (response) => {
          this.notification.showSuccessNotification('Publicación eliminada con éxito');
          this.eventService.emit<Post>({action: 'delete', timestamp: new Date(), entity:'post'});
        },
        error: (error) => {
          this.notification.showErrorNotification('Error al eliminar la publicación');
        }
      })
    );
  }

  report(postId : string){
    const url = environment.api_url + postEndpoint.report;
    return this.http.put(url,{id:postId},{context:checkToken()}).pipe(
       tap({
        next: (response) => {
          this.notification.showSuccessNotification('Publicación reportada con éxito');
          this.eventService.emit<Post>({action: 'update', timestamp: new Date(), entity:'post'});
        },
        error: (error) => {
          this.notification.showErrorNotification('Error al reportar la publicación');
        }}
    ));

  }
}
