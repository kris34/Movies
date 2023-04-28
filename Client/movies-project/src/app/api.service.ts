import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IMovie } from './shared/interfaces/movie';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  loadMovies() {
    return this.http.get<any>(`${apiUrl}/movies`);
  }
}