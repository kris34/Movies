import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css'],
})
export class ReactionsComponent {
  @Input() movie: IMovie;
  @Input() dislikeCount: number;
  @Input() likeCount: number;

  constructor(private movieApi: MovieService) {}

  likeMovie(movie: IMovie) {
    this.movieApi.likeMovie(movie._id, movie).subscribe({
      next: (v) => {
        console.log(v);
        this.likeCount++;
        this.dislikeCount--;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  dislikeMovie(movie: IMovie) {
    this.movieApi.dislikeMovie(this.movie._id, movie).subscribe({
      next: (v) => {
        console.log('disliked');
        this.dislikeCount++;
        this.likeCount--;
      },
    });
  }
}
