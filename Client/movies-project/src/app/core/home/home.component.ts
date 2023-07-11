import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, concatMap, of, startWith } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: IMovie[] | undefined = [];

  constructor(private api: ApiService, private movieService: MovieService) {
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
