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
import { LikeService } from '../like.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: IMovie[] | null = [];
  filteredMovies: IMovie[] = [];

  get Movie() {
    return this.likeS.hasMoive;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public likeS: LikeService
  ) {
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
        console.log(this.Movie);
      },
    });
  }
}
