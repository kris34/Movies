import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ILike } from 'src/app/shared/interfaces/like';
import { IMovie } from 'src/app/shared/interfaces/movie';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input() movie: IMovie;
  @Input() count: number;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private service: MovieService
  ) {}

  like(movie: IMovie) {
    this.service.likeMovie(movie._id, movie).subscribe({
      next: (v) => {
        console.log(v);
        this.count++
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
