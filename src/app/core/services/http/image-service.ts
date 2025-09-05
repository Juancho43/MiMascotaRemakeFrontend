import {inject, Injectable} from '@angular/core';
import {NotificationService} from '@services/utils/notification.service';
import {HttpClient} from '@angular/common/http';
import {catchError, tap, throwError} from 'rxjs';
import {environment} from '@environments/environment.development';
import {imageEndpoint} from '@core/endpoints/image.endpoint';
import {checkToken} from '@core/other/token.interceptor';
import {EventService} from '@services/context/event-service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private http = inject(HttpClient);
  private notification = inject(NotificationService);
private eventContext = inject(EventService);
 postAnimalImages(animal_id: string, image: File) {
   const formData = new FormData();
   formData.append('animal_id', animal_id);
   formData.append('image', image);


   return this.http.post(environment.api_url + imageEndpoint.animal, formData, {
     reportProgress: true,
     observe: 'events',
     context: checkToken()
   }).pipe(
     tap(() => {
       this.notification.showSuccessNotification('Imagen subida correctamente');
       this.eventContext.emit<any>({data: {}, timestamp: new Date(), action: 'delete', entity:'AnimalImage'})
     }),
     catchError(error => {
       this.notification.showErrorNotification();
       return throwError(() => error);
     })
   );
 }
}
