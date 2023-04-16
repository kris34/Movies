import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IMovie } from '../shared/interfaces/movie';
import { getSession } from '../shared/sessions';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  constructor(private http: HttpClient) {}

  createMovie(data: {}) {
    console.log(data);
    return this.http.post<any>(`${apiUrl}/movie/create`, data, { headers: { 'x-authorization': getSession().accessToken } });
  }
}
