import { IComment } from 'src/app/shared/interfaces/comment';

export interface CommentState {
  comments: IComment[];
}

export const initialState: CommentState = {
  comments: [],
};
