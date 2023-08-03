import { Injectable } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieGuardService {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/'])
      return false
    }
    return true;

  }


}
