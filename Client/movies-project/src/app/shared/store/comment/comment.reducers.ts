import { createReducer, on } from '@ngrx/store';
import { commentsStateInterface } from 'src/app/types/commentsStateInterface';
import { commentStateInterface } from 'src/app/types/commentsStateInterface';
import {
  addComment,
  addCommentSuccess,
  getComments,
  getCommentsFailure,
  getCommentsSuccess,
} from './comment.actions';

export const initialState: commentsStateInterface = {
  isLoading: false,
  comments: [],
  comment: {},
  error: null,
};

export const commentInitialState: commentStateInterface = {
  content: {
    _id: '',
    _ownerId: '',
    _movieId: '',
    content: '',
    username: '',
  },
};

export const getReducers = createReducer(
  initialState,
  on(getComments, (state) => ({ ...state, isLoading: true })),
  on(getCommentsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    comments: action.comments,
  }))
);
