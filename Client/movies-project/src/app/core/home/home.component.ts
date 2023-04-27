import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: IMovie[] | null = null;

  constructor(private router: Router, private api: ApiService) {
    /*  this.getMovies(); */
  }

  ngOnInit(): void {
    this.api.loadMovies().subscribe({
      next: (v) => {
        this.movies = v;
        console.log(this.movies);
        
      },
      error: (err) => {
        console.log(err);
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
