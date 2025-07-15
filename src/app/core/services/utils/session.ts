import {inject, Injectable, signal} from '@angular/core';
import {CookieService} from '@services/utils/cookie.service';
import {AuthService} from '@http/auth.service';
import {LoginInterface} from '@model/auth/login.interface';
import {Router} from '@angular/router';
import {RegisterInterface} from '@model/auth/register.interface';


@Injectable({
  providedIn: 'root'
})
export class Session {
  private authService = inject(AuthService);
  private cookieService = inject(CookieService);
  private router = inject(Router);
  $login = this.isLoggedIn();

  login(loginData : LoginInterface) {
    this.authService.login(loginData).subscribe(
      (res) => {
        this.initializeSession(res.data!.token);
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

  register(registerData : RegisterInterface) {
    this.authService.register(registerData).subscribe(
      (res) => {
        if(res.success)  this.router.navigate(['/auth/validate']);;
      }
    );
  }
  validate(code : string, mail : string) {
    this.authService.validate(code,mail).subscribe(
      (res) => {
        if(res.success) this.initializeSession(res.data!.token);
      }
    );
  }

  private initializeSession(token : string) {
    this.saveToken(token);
    this.$login.set(true);
    this.router.navigate(['/app/journals']);
  }
  private clearSession() {
    this.cookieService.removeCookie('token');
    this.$login.set(false);
    this.router.navigate(['/']);
  }
  private saveToken(token: string) {
    this.cookieService.saveCookie('token', token);
  }
  getToken() {
    return this.cookieService.getCookie('token');
  }
  isLoggedIn() {
    return signal(this.getToken() !== undefined);
  }
}
