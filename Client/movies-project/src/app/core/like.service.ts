import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, filter } from 'rxjs';
import { IMovie } from '../shared/interfaces/movie';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private movie$$ = new BehaviorSubject<undefined | null | IMovie>(undefined);

  movie$ = this.movie$$
    .asObservable()
    .pipe(filter((val): val is IMovie | null => val !== undefined));

  movie: IMovie | null = null;

  isLogged: boolean = false;

  subscription: Subscription;

  get hasMoive() {
    return this.movie != null;
  }

  constructor(private http: HttpClient, private router: Router) {
    this.subscription = this.movie$.subscribe((movie) => {
      this.movie = movie;
    });
  }
}
