import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';

/* export const guestGuard(): CanActivateFn {

  return () => }{

}
}; */

export function authenticationGuard(): CanActivateFn {
  return () => {
    const oauthService: AuthService = inject(AuthService);
    const router: Router = inject(Router)
    if (oauthService.isAuthenticated()) {
      return true;
    }
    router.navigate(['/'])
    return false;
  };
}