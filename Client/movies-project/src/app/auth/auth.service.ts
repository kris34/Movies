import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { tap } from 'rxjs';
import { IUser } from '../shared/interfaces/user';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: IUser | null;

  constructor(private http: HttpClient) {}

  register(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/register`, userData).pipe(tap((response) => {
      if (!response._id) { return }
    }))
  }
}
