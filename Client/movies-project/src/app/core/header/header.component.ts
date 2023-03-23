import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getSession } from 'src/app/shared/sessions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  get isLoggedIn() {
    

    return false;
  }

  constructor(private router: Router) {}
}
