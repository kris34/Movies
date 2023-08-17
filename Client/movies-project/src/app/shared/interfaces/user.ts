import { IMovie } from './movie';

export interface IUser {
  username: string;
  email: string;
  profilePic: string;
  _id: string;
  accessToken: string;
  myMovies: string[];
  myWatchlist: any[];
  isAdded: boolean;
}
