import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IMovie } from '../shared/interfaces/movie';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  

  constructor(private http: HttpClient) {}

  createMovie(data: {}) {
    return this.http.post<IMovie>(`${apiUrl}/movie/create`, data);
  }
}
