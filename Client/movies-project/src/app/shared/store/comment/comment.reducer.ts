import { createReducer, on } from '@ngrx/store';
import { initialState } from './comment.state';
import { loadCommentSucress, loadComments } from './comment.actions';

const _commentReducer = createReducer(
  initialState,
  on(loadComments, (state) => {
    return {
      ...state,
      comments: state.comments,
    };
  }),
  on(loadCommentSucress, (state, action ) => { 
    return {
        ...state,
        commentList: [...action.commentList]
    }
  })
);

export function commentReducer(state: any, action: any) {
  return _commentReducer(state, action);
}
