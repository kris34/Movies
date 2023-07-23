import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, filter } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  movie: IMovie | null = null;
  arr: string[];
  isOwner: boolean;
  watchlist: IMovie[] | null = [];
  isAddedToWatchlist: boolean = false;
  movieId: string;

  get userid() {
    return this.auth.user?._id;
  }

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private auth: AuthService,
    private movieApi: MovieService,
    private router: Router
  ) {
    this.getMovie();
   // this.getWatchlist();
  }

/*   getWatchlist() {
    this.api.loadUserWatchlist().subscribe({
      next: (v) => {
        this.watchlist = v;
      },
    });
  }
 */
  addToWatchlist(id: string) {
    this.movieApi.addMovie(id, {}).subscribe({
      next: (v) => {
        this.movie = v[0];
        console.log('added');

        this.isAddedToWatchlist = true;
      },
    });
  }

  removeFromWatchlist(id: string) {
    this.movieApi.removeFromWatchlist(id).subscribe({
      next: (v) => {
        this.movie = v[1];
        console.log('removed');
        this.isAddedToWatchlist = false;
      },
    });
  }

  deleteMovie(id: string) {
    this.movieApi.deleteMovie(id).subscribe({
      next: (v) => {
        this.router.navigate(['/']);
      },
    });
  }

  getMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieId = id!;
    return this.api.loadMovie(id).subscribe({
      next: (v) => {
        this.isOwner = this.userid == v._ownerId;
        this.movie = v;

        if (this.movie.bookmarkedUsers.includes(this.userid!)) {
          console.log('here');
          this.isAddedToWatchlist = true;
        } else {
          this.isAddedToWatchlist = false;
        }

        if (this.movie.likes.length - this.movie.dislikes.length == 1) {
          this.arr = this.movie.likes.slice(-1);
        } else if (this.movie.likes.length - this.movie.dislikes.length == 2) {
          this.arr = this.movie.likes.slice(-2);
        } else if (this.movie.likes.length - this.movie.dislikes.length == 3) {
          this.arr = this.movie.likes.slice(-3);
        } else if (this.movie.likes.length - this.movie.dislikes.length == 4) {
          this.arr = this.movie.likes.slice(-4);
        } else if (this.movie.likes.length - this.movie.dislikes.length >= 5) {
          this.arr = this.movie.likes.slice(-5);
        } else {
          this.arr = this.movie.dislikes.slice(-1);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
/* 
    addMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieApi.addMovie(id!, {}).subscribe({
      next: (v) => {
        console.log(v);
      },
    });
  }

    toggleWatchlist(movieId: string) {
    if (this.isMovieInWatchlist(movieId)) {
      this.movieApi.removeFromWatchlist(movieId).subscribe((v) => {
        console.log(v);
        this.movie = v[1]
        this.isAddedToWatchlist = false;
       // this.button.nativeElement.textContent = 'Add To Watchlist';
      });
    } else {
      this.movieApi.addMovie(movieId, {}).subscribe((v) => {
        console.log(v);
        this.movie = v[1]
        this.isAddedToWatchlist = true;
       // this.button.nativeElement.textContent = 'Remove from Watchlist';
      });
    }
  }

  isMovieInWatchlist(movieId: string): boolean {
    return this.watchlist
      ? this.watchlist.some((movie) => movie._id == movieId)
      : false;
  } */
}
