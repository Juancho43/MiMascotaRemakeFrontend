import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { ApiResponse } from '@model/ApiResponse';
import { checkToken } from '@core/other/token.interceptor';
import { catchError, of, tap } from 'rxjs';
import { authEndpoint } from '@core/endpoints/auth.endpoint';
import { NotificationService } from '@services/utils/notification.service';
import {LoginInterface} from '@model/auth/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private notification = inject(NotificationService);


  login(data : LoginInterface) {
    return this.http.post<ApiResponse<{ token : string }>>(environment.api_url + authEndpoint.login, data).pipe(
      tap(() => {
        this.notification.showSuccesNotification();
      }),
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }

  logout() {
    return this.http
      .post<ApiResponse<string>>(
        environment.api_url + authEndpoint.logout,{},{}
      )
      .pipe(
        tap(() => {
          this.notification.showSuccesNotification();
        }),
        catchError(() => {
          this.notification.showErrorNotification();
          return of();
        }),
      );
  }
  passwordReset(data: { new_password: string }) {
    return this.http
      .post<ApiResponse<string>>(environment.api_url + authEndpoint.passwordReset, data, {
        context: checkToken(),
      })
      .pipe(
        tap(() => {
          this.notification.showSuccesNotification();
        }),
        catchError(() => {
          this.notification.showErrorNotification();
          return of();
        }),
      );
  }

}
