import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from 'src/app/movie/movie.service';
import { LOAD_COMMENT, loadCommentSucress } from './comment.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class CommentEffects {
  constructor(private actions$: Actions, private api: MovieService) {}

  _comment = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_COMMENT),
      exhaustMap((action) => {
        return this.api.loadComments().pipe(
          map((data) => {
            return loadCommentSucress({ commentList: data });
          })
        );
      })
    )
  );
}
