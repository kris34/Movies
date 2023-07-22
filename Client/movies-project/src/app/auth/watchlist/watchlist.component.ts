import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent {
  /* watchlist: IMovie[] | null = []; */
  watchlist$ = this.api.loadUserWatchlist();

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private movieService: MovieService
  ) {
    /*  this.getWatchlist(); */
  }

  /*   getWatchlist() {
    this.api.loadUserWatchlist().subscribe({
      next: (v) => {
        this.watchlist = v;
        console.log(this.watchlist);
      },
    });
  } */
}
