import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CommentActions from './comment.actions';
import { map, mergeMap } from 'rxjs';
import { MovieService } from '../../../movie/movie.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class CommentEffects {
  getComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.getComments),
      mergeMap(() => {
        return this.api
          .loadUserComments()
          .pipe(
            map((comments) => CommentActions.getCommentsSuccess({ comments }))
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private api: MovieService,
    private route: ActivatedRoute
  ) {}
}
