import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css'],
})
export class DislikeComponent {
  @Input() movie: IMovie;
  @Input() count: number;

  constructor(private moiveApi: MovieService) {}

  dislike(movie: IMovie) {
    this.moiveApi.dislikeMovie(this.movie._id, movie).subscribe({
      next: (v) => {
        console.log('disliked');
        this.count++;
      },
    });
  }
}
