import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: IMovie[] | null = null;
  movie: IMovie | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {
    /*  this.getMovies(); */
  }

  ngOnInit(): void {
    this.api.loadMovies().subscribe({
      next: (v) => {
        this.movies = v.slice(-4);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

   like(id: string) {
    this.api.likeMovie(id, ).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (err) => {
      },
    });
  } 

  /* getMovies() {
    this.api.loadMovies().subscribe({
      next: (v) => {
        this.movies = v;
      },
      error: (err) => {
        console.log(err);
      },
    });
  } */
}
