import { IUser } from './user';

export interface IMovie {
  addedBy: string;
  title: string;
  genre: string;
  _id: string;
  year: number;
  directors: string;
  actors: string;
  imageUrl: string;
  description: string;
  productionCompanies: string;
  likes: [string];
  dislikes: string[];
  bookmarkedUsers: [string];
  _ownerId: string
  isLIked: boolean
  count: number
}
