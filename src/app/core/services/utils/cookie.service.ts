import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {getCookie, removeCookie, setCookie} from 'typescript-cookie';

@Injectable({
    providedIn: 'root',
  })
  export class CookieService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    saveCookie(key: string, value: string) {
      if (isPlatformBrowser(this.platformId)) {
        setCookie(key, value, { expires: 10, path: '/' });
      }
    }

    getCookie(cookie: string) {
      if (isPlatformBrowser(this.platformId)) {
        return getCookie(cookie);
      }
      return null;
    }

    removeCookie(cookie: string) {
      if (isPlatformBrowser(this.platformId)) {
        removeCookie(cookie);
      }
    }
  }
