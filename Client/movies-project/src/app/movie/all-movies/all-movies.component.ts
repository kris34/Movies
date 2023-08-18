import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
})
export class AllMoviesComponent {
  movies$ = this.api.loadMovies();

  constructor(private api: ApiService, private router: Router) {}

  getUser(id: string) {
    return this.api.getProfile(id);
  }
}
