import { IComment } from 'src/app/shared/interfaces/comment';
import { IMovie } from '../shared/interfaces/movie';

export interface commentsStateInterface {
  isLoading: boolean;
  comments: IComment[];
  comment: {},
  error: string | null;
}

export interface commentStateInterface {
  content: IComment;
}
