import {HttpContext, HttpContextToken, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {CookieService} from '@services/utils/cookie.service';

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true);
}

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(CHECK_TOKEN)) {
    const session = inject(CookieService);
    const accessToken = session.getCookie('token');
    if (accessToken != null) {
      const authRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
      });
      return next(authRequest);
    }
    return next(req);
  }
  return next(req);
};
