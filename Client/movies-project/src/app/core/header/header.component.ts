import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { getSession } from 'src/app/shared/sessions';

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

  token = this.auth.user;

  constructor(private router: Router, public auth: AuthService) {}

  logout() {
    this.auth.logout()
  }
}
