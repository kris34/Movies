import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, filter } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  /* private id$$ = new BehaviorSubject<undefined | null | string>(undefined);
 
  id$ = this.id$$
    .asObservable()
    .pipe(filter((val): val is string | null | undefined => val !== undefined));

  subscription: Subscription;

  id: string | null | undefined = null; */

  movie: IMovie | null = null;

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.getMovie();
  }

  getMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.api.loadMovie(id).subscribe({
      next: (v) => {
        this.movie = v;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
