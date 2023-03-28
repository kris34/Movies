import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { getSession } from './shared/sessions';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movies-project';

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    if (!getSession()) {
      this.auth.setUserInfo(null, false);
      return;
    }
    this.auth.setUserInfo(getSession(), true);
  }
}
