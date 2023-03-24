import { IUser } from './interfaces/user';

export const setSession = ({ _id, username, accessToken }: IUser) => {
  const user = { _id, username, accessToken };
  sessionStorage.setItem('User', JSON.stringify(user));
  localStorage.setItem('User', JSON.stringify(user));
};

export const getSession = () => {
  const session = sessionStorage.getItem('User');
  const local = localStorage.getItem('User');
  return session ? JSON.parse(session) : null, local ? JSON.parse(local) : null;
};
