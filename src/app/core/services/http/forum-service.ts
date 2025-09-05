import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '@services/utils/notification.service';
import {environment} from '@environments/environment.development';
import {forumEndpoint} from '@core/endpoints/forum.endpoint';
import {ApiResponse} from '@model/ApiResponse';
import {ApiResponseCollection} from '@model/ApiResponseCollection';
import {Forum} from '@model/model/forum';
import {Post} from '@model/model/post';
import {checkToken} from '@core/other/token.interceptor';


@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private http = inject(HttpClient);
  private notification = inject(NotificationService);

  forumGetBySlug(slug: string) {
    const url = environment.api_url + forumEndpoint.getBySlug(slug);
    return this.http.get<ApiResponse<Forum>>(url);
  }
  getAll(){
    const url = environment.api_url + forumEndpoint.all;
    return this.http.get<ApiResponseCollection<Forum>>(url);
  }
  getPosts(slug: string, page: number = 1, limit: number = 10) {
    const url = environment.api_url + forumEndpoint.getPosts(slug, page, limit);
    return this.http.get<ApiResponseCollection<Post>>(url);
  }
  getPostsByLocation(slug: string, page: number = 1, limit: number = 10, locationSlug: string) {
    const url = environment.api_url + forumEndpoint.getPostsByLocation(slug, locationSlug,page, limit);
return this.http.get<ApiResponseCollection<Post>>(url);
  }
  create(data : Forum){
    const url = environment.api_url + forumEndpoint.new;
    return this.http.post(url, data, {context:checkToken()});
  }
  edit(data: Forum){
    const url = environment.api_url + forumEndpoint.edit;
    return this.http.put(url, data, {context:checkToken()});
  }
  delete(data: string){
    const url = environment.api_url + forumEndpoint.delete(data);
    return this.http.delete(url,  {context:checkToken()});
  }

  addImage(forumId : string, image : File){
    const url = environment.api_url + forumEndpoint.addImage;
    const formData = new FormData();
    formData.append('forum_id', forumId);
    formData.append('image', image);
    return this.http.post(url, formData, {context:checkToken()});
  }
  deleteImage(forumId : string){
    const url = environment.api_url + forumEndpoint.deleteImage;
    return this.http.put(url,{forum_id:forumId},{context:checkToken()})
  }
}
