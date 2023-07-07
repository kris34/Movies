import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, concatMap, of, startWith } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: IMovie[] | null = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

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

  like(id: string, movie: IMovie) {
    this.api.likeMovie(id).subscribe({
      next: (v) => {
        console.log(v);
      },
    });
  }
}
