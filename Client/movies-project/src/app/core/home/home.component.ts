import { Component } from '@angular/core';

import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: IMovie[] | null = null;
  noMovies: boolean = false

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.loadMovies().subscribe({
      next: (v) => {
        this.movies = v.slice(-4);
        if (this.movies.length < 1) {
          this.noMovies = true
        }
      },
    });
  }
}
