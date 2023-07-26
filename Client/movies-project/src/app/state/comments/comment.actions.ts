import { createAction, props } from '@ngrx/store';

export const LOAD_COMMENTS = '[comments page] load comments';
export const LOAD_COMMENTS_SUCCESS = '[comments page] load comments success';

export const loadComments = createAction(LOAD_COMMENTS);
export const loadCommentsSuccess = createAction(
  LOAD_COMMENTS_SUCCESS,
  props<{ comments: Comment[] }>()
);

