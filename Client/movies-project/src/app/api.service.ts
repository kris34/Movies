import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IMovie } from './shared/interfaces/movie';
import { getSession } from './shared/sessions';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  loadMovies() {
    return this.http.get<IMovie[]>(`${apiUrl}/movies`);
  }

  loadMovie(id: string | null) {
    return this.http.get<IMovie>(`${apiUrl}/movies/${id}`);
  }

  likeMovie(id: string) {
    return this.http.get<IMovie>(`${apiUrl}/${id}/like`, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }
}
