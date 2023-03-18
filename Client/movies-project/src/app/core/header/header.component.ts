import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isLoggedIn() {
    return true;
  }

  user: String = '';

  get username() {
    return (this.user = 'Peter');
  }

  constructor(private router: Router) {}
}
