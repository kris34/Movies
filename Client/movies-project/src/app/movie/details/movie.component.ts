import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, filter } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

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
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

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
