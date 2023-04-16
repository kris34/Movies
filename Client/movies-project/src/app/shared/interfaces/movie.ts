import { IUser } from './user';

export interface IMovie {
  title: string;
  genre: string;
  _id: string;
  year: number;
  directors: string;
  actors: string;
  imageUrl: string;
  description: string;
  productionCompanies: string;
  likes: [];
  dislikes: [];
  userId: IUser
}
