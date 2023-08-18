import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { MovieService } from 'src/app/movie/movie.service';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { ApiService } from 'src/app/api.service';
import { subscribeOn } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: IUser | null = null;
  movies: IMovie[] = [];
  watchlist: IMovie[] = [];
  id: string | null;

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private movieApi: MovieService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.getUser(this.id!);
  }

  getUser(id: string) {
    this.api.getProfile(id).subscribe({
      next: (v) => {
        console.log(v);
        
        this.user = v;
        let ids = this.user.myMovies;
        let watchlistIds = this.user.myWatchlist;

        watchlistIds.forEach((id) =>
          this.api.loadMovie(id).subscribe({
            next: (v) => {
              this.watchlist.push(v);
              this.watchlist = this.watchlist.slice(-3);
            },
          })
        );

        ids.forEach((id) =>
          this.api.loadMovie(id).subscribe({
            next: (v) => {
              this.movies.push(v);
              this.movies = this.movies.slice(-3);
            },
          })
        );
      },
    });
  }

  /* getMovies() {
    return this.api.loadMovies().subscribe({
      next: (v) => {
        this.movies = v.slice(-4);
      },
    });
  } */
}
