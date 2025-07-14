import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core';
import {Session} from '@services/utils/session';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Session);
  const router = inject(Router);

  if (auth.$login()) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};
