import {inject, Injectable, signal} from '@angular/core';
import {CookieService} from '@services/utils/cookie.service';
import {AuthService} from '@http/auth.service';
import {LoginInterface} from '@model/auth/login.interface';

@Injectable({
  providedIn: 'root'
})
export class Session {
  private authService = inject(AuthService);
  private cookieService = inject(CookieService);
  $login = this.isLoggedIn();

  login(loginData : LoginInterface) {
    this.authService.login(loginData).subscribe(
      (res) => {
        this.saveToken(res.data!);
        this.$login.set(true);
      }
    );

  }


  logout() {
    this.authService.logout().subscribe(
      (res) => {
        if(res.success) this.clearSession();
      }
    );
  }

  clearSession() {
    this.cookieService.removeCookie('token');
    this.$login.set(false);
  }
  saveToken(token: string) {
    this.cookieService.saveCookie('token', token);
  }
  getToken() {
    return this.cookieService.getCookie('token');
  }
  isLoggedIn() {
    return signal(this.getToken() !== undefined);
  }
}
