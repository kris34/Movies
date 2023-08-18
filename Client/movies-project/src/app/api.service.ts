import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { environment } from 'environments/environment';
import { IMovie } from './shared/interfaces/movie';
import { getSession } from './shared/sessions';
import { Subject, startWith, tap } from 'rxjs';
import { IUser } from './shared/interfaces/user';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  @Input() likes: number = 0;

  constructor(private http: HttpClient) {}

  loadMovies() {
    return this.http.get<IMovie[]>(`${apiUrl}/movies`);
  }

  loadMovie(id: string | null) {
    return this.http.get<IMovie>(`${apiUrl}/movies/${id}`);
  }

  loadProfile() {
    return this.http.get<IUser>(`${apiUrl}/profile`, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }

  getProfile(id: string) {
    return this.http.get<IUser>(`${apiUrl}/${id}/profile`, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }

  loadUserWatchlist() {
    return this.http.get<any>(`${apiUrl}/watchlist`, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }

  loadUserList() {
    return this.http.get<any>(`${apiUrl}/list`, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }
}
