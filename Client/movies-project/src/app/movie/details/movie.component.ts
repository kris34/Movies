import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, filter } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent /* implements OnInit */ {
  /* private id$$ = new BehaviorSubject<undefined | null | string>(undefined);
 
  id$ = this.id$$
    .asObservable()
    .pipe(filter((val): val is string | null | undefined => val !== undefined));

  subscription: Subscription;

  id: string | null | undefined = null; */

  constructor( private route: ActivatedRoute, private api: ApiService) {
      
  }

  getMovie() {
    const id = this.route.snapshot.paramMap.get('id');

    return this.api.loadMovie(id).subscribe({
      next: (v) => {},
      error: (err) => {
        console.log(err);
      },
    });
  }

  /* ngOnInit(): void {
    console.log(this.getId());
  } */
}
