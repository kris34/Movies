import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription, filter } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
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
