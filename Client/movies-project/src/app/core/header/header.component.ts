import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

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

  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
