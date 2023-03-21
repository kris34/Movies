import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { tap } from 'rxjs';
import { IUser } from '../shared/interfaces/user';
import { setSession } from '../shared/sessions';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: IUser | null;
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  register(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/register`, userData).pipe(
      tap((user) => {
        this.user = user;
        setSession(user);
      })
    );
  }

  login(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/login`, userData).pipe(
      tap((user) => {
        this.user = user;
      })
    );
  }
}
