import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { AuthService } from 'src/app/auth/auth.service';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css'],
})
export class ReactionsComponent {
  @Input() movie: IMovie;
  @Input() dislikeCount: number;
  @Input() likeCount: number;

  get user() {
    return this.auth.user;
  }

  constructor(private movieApi: MovieService, private auth: AuthService) {}

  likeMovie(movie: IMovie) {
    this.movieApi.likeMovie(movie._id, movie).subscribe({
      next: (v) => {
        this.likeCount++;
        if (movie.dislikes.includes(this.user!._id)) {
          this.dislikeCount--;
        }
        this.movie = v;
        if (this.dislikeCount < 0) {
          this.dislikeCount = 0;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  dislikeMovie(movie: IMovie) {
    this.movieApi.dislikeMovie(this.movie._id, movie).subscribe({
      next: (v) => {
        this.dislikeCount++;
        if (this.movie.likes.includes(this.user!._id)) {
          this.likeCount--;
        }
        this.movie = v;
        if (this.likeCount < 0) {
          this.likeCount = 1;
        }
      },
    });
  }
}
