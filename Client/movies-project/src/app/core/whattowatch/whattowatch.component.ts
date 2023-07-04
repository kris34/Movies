import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-whattowatch',
  templateUrl: './whattowatch.component.html',
  styleUrls: ['./whattowatch.component.css'],
})
export class WhattowatchComponent implements OnInit {
  movies: IMovie[] | null = null;

  constructor(private router: Router, private api: ApiService) {}

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


}
