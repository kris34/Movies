import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { MovieService } from 'src/app/movie/movie.service';

@Injectable()
export class CommentEffects {
  constructor(private service: MovieService, private actions$: Actions) {}
}
