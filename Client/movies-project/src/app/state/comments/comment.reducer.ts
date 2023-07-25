import { createReducer, on } from '@ngrx/store';
import { IComment } from 'src/app/shared/interfaces/comment';
import { addComment } from './comment.actions';

export interface CommentState {
  comments: IComment[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CommentState = {
  comments: [],
  error: null,
  status: 'pending',
};


export const commentReducer = createReducer(
    initialState, 
    on(addComment, (state, {content}) => ({ 
        ...state, 
        comments: [...state.comments, { content: content}]
    }))
)