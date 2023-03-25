import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { getSession } from 'src/app/shared/sessions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements DoCheck {
  isLoggedIn: boolean = false

  constructor(private router: Router, public auth: AuthService) {}

  get user(){
    return this.auth.user
  }

  ngDoCheck(): void {
    this.isLoggedIn = this.auth.isLoggedIn;
  }
}
