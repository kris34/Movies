import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, filter } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  movie: IMovie | null = null;
  likes: string[];

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.getMovie();
  }

  getMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.api.loadMovie(id).subscribe({
      next: (v) => {
        this.movie = v;
        this.likes = this.movie.likes.slice(-5);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
