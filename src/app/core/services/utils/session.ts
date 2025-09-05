import {inject, Injectable} from '@angular/core';
import {CookieService} from '@services/utils/cookie.service';
import {AuthService} from '@http/auth.service';
import {LoginData} from '@model/auth/LoginData';
import {Router} from '@angular/router';
import {RegisterData} from '@model/auth/RegisterData';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import {User} from '@model/auth/User';


@Injectable({
  providedIn: 'root'
})
export class Session {
  private authService = inject(AuthService);
  private cookieService = inject(CookieService);
  private router = inject(Router);

  $login =toSignal(
    this.authService.isLoggedIn().pipe(
      map(res =>{

        return  res.data!;


      }
)
    ),
    { initialValue: !!this.cookieService.getCookie('token') }
  );
  $admin = toSignal(
    this.authService.isAdmin().pipe(
      map(res =>{

        return  res.data!;


      }
)
    ),
    { initialValue: false }
  );



  login(loginData : LoginData) {
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

  register(registerData : RegisterData) {
    this.authService.register(registerData).subscribe(
      (res) => {
        if(res.success)  this.router.navigate(['/auth/validate']);
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
     this.cookieService.saveCookie('token', token);


  }
  private clearSession() {
    this.cookieService.removeCookie('token');

  }




}
