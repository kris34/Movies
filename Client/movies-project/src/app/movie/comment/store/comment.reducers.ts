import { createReducer, on } from '@ngrx/store';
import { commentsStateInterface } from 'src/app/types/commentsStateInterface';
import { getComments, getCommentsFailure, getCommentsSuccess } from './comment.actions';

export const initialState: commentsStateInterface = {
  isLoading: false,
  comments: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(getComments, (state) => ({ ...state, isLoading: true })),
  on(getCommentsSuccess, (state, action) => ({ ...state, isLoading: false, comments: action.comments })),
  on(getCommentsFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }))
);

