import { Component } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  get isLoggedIn() {
    return this.auth.isLoggedIn;
  }

  constructor(private auth: AuthService) {}
}
