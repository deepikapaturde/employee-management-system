import { inject }
from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

export const AuthGuard:
CanActivateFn = () => {

  const router = inject(Router);

  // CHECK BROWSER

  if (typeof window !== 'undefined') {

    const token =
      localStorage.getItem('token');

    if (token) {

      return true;
    }
  }

  router.navigate(['/']);

  return false;
};