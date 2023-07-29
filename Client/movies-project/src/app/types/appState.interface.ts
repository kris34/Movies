import { IUser } from '../shared/interfaces/user';
import { commentsStateInterface } from './commentsStateInterface';

export interface AppStateInterface {
  comments: commentsStateInterface;
}
