import { createAction, props } from '@ngrx/store';
import { IComment } from 'src/app/shared/interfaces/comment';

export const GET_COMMENTS = '[Comments] Get Comments';
export const GET_COMMENTS_SUCCESS = '[Comments] Get Comments Success';
export const GET_COMMENTS_FAILURE = '[Comments] Get Comments failure';
export const ADD_COMMENT = '[Comments] Add Comments';
export const ADD_COMMENT_SUCCESS = '[Comments] Add Comments Success';

export const getComments = createAction(GET_COMMENTS);

export const getCommentsSuccess = createAction(
  GET_COMMENTS_SUCCESS,
  props<{ comments: IComment[] }>()
);

export const getCommentsFailure = createAction(
  GET_COMMENTS_FAILURE,
  props<{ error: string }>()
);

export const addComment = createAction(
  ADD_COMMENT,
  props<{ comment: IComment }>()
);

export const addCommentSuccess = createAction(
  ADD_COMMENT_SUCCESS,
  props<{ comment: IComment }>()
);
