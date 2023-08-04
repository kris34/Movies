import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get user() {
    return this.auth.user;
  }

  get isLoggedIn() {
    return this.auth.isLoggedIn;
  }

  constructor(public auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
  }

  goToPage(location: string){ 
    this.router.navigate([`${location}`])
  }
}
