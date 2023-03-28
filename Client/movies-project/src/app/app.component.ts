import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { getSession } from './shared/sessions';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movies-project';

  private cookie_name: string = 'token';

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private cookie: CookieService
  ) {
    /*   if (!getSession()) {
      this.auth.setUserInfo(null, false);
      return;
    }
    this.auth.setUserInfo(getSession(), true); 
  } */
    if (this.cookie.get('token')) {
      console.log('yes');
      this.auth.isLogged = true;
    }

    console.log(this.cookie.get('token'));
    
  }
}
