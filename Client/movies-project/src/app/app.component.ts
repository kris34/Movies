import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { getSession } from './shared/sessions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movies-project';

  constructor(private auth: AuthService) {
    if (!getSession()) {
      console.log('yes');
      this.auth.setUserInfo(null, false);
      return;
    } 
    this.auth.setUserInfo(getSession(), true);
  }

  ngOnInit(): void {
   /*  if (!getSession()) {
      console.log('yes');

      this.auth.setUserInfo(null, false);
      return;
    }
    this.auth.setUserInfo(getSession(), true); */
  }
}
