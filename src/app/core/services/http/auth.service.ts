import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {ApiResponse} from '@model/ApiResponse';
import {checkToken} from '@core/other/token.interceptor';
import {catchError, of, tap} from 'rxjs';
import {authEndpoint} from '@core/endpoints/auth.endpoint';
import {NotificationService} from '@services/utils/notification.service';
import {LoginData} from '@model/auth/LoginData';
import {RegisterData} from '@model/auth/RegisterData';
import {User} from '@model/auth/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private notification = inject(NotificationService);


  login(data : LoginData) {
    return this.http.post<ApiResponse<{ token : string }>>(environment.api_url + authEndpoint.login, data).pipe(
      tap(() => {
        this.notification.showSuccesNotification('Bienvenido de nuevo');
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
        environment.api_url + authEndpoint.logout,{},{context:checkToken()}
      )
      .pipe(
        tap(() => {
          this.notification.showSuccesNotification('Hasta luego');
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
          this.notification.showSuccesNotification('Contraseña actualizada correctamente');
        }),
        catchError(() => {
          this.notification.showErrorNotification();
          return of();
        }),
      );
  }

  register(data: RegisterData){
    console.log(environment.api_url + authEndpoint.register)

    return this.http.post<ApiResponse<string>>(
      environment.api_url + authEndpoint.register, data
    ).pipe(
      tap(() => {
        this.notification.showSuccesNotification("Revisa tu correo para validar tu cuenta");
      }),
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }

  validate(code: string, email: string) {
    return this.http
      .post<ApiResponse<{ token: string }>>(
        environment.api_url + authEndpoint.validate,
        { code, email },
      )
      .pipe(
        tap(() => {
          this.notification.showSuccesNotification('Cuenta validada correctamente');
        }),
        catchError(() => {
          this.notification.showErrorNotification();
          return of();
        }),
      );
  }

  getUser(){
    return this.http.get<ApiResponse<User>>(environment.api_url + authEndpoint.user, {
      context: checkToken(),
    }).pipe(
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }

  editUser(data: User) {

    return this.http.put<ApiResponse<User>>(environment.api_url + authEndpoint.userEdit, data, {
      context: checkToken(),
    }).pipe(
      tap(() => {
        this.notification.showSuccesNotification('Usuario actualizado correctamente');
      }),
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }

  deleteUser(data: User){
    return this.http.delete<ApiResponse<string>>(environment.api_url + authEndpoint.userDelete.replace(':id',data.id!), {
      context: checkToken(),
      body: data,
    }).pipe(
      tap(() => {
        this.notification.showSuccesNotification('Usuario eliminado correctamente');
      }),
      catchError(() => {
        this.notification.showErrorNotification();
        return of();
      }),
    );
  }
}
