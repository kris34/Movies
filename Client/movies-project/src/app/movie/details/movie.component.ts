import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, filter } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  movie: IMovie | null = null;
  arr: string[];
  isOwner: boolean

  get userid() {
    return this.auth.user?._id;
  }

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private auth: AuthService
  ) {
    this.getMovie();
    console.log(this.isOwner);
  }

  getMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.api.loadMovie(id).subscribe({
      next: (v) => {
        this.isOwner = this.userid == v._ownerId;
        
        this.movie = v;
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
}
