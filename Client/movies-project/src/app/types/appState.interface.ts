import { IUser } from '../shared/interfaces/user';
import { commentStateInterface, commentsStateInterface } from './commentsStateInterface';

export interface AppStateInterface {
  comments: commentsStateInterface;
  comment: commentStateInterface
}
