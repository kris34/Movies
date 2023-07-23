import { Component } from '@angular/core';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies$ = this.api.loadMovies();

  constructor(private api: ApiService) {}
}
