import { createAction, props } from '@ngrx/store';
import { IComment } from 'src/app/shared/interfaces/comment';

export const getComments = createAction('[Comments] Get Comments');
export const getCommentsSuccess = createAction(
  '[Comments] Get Comments success',
  props<{ comments: IComment[] }>()
);
export const getCommentsFailure = createAction(
  '[Comments] Get Comments failure',
  props<{ error: string }>()
);
