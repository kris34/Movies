import { IUser } from './interfaces/user';

export const setSession = ({ _id, username, email, accessToken }: IUser) => {
  const user = { _id, email, accessToken };
  sessionStorage.setItem('User', JSON.stringify(user));
  localStorage.setItem('User', JSON.stringify(user));
};
