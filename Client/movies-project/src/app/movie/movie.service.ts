import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IMovie } from '../shared/interfaces/movie';
import { getSession } from '../shared/sessions';
import { BehaviorSubject, Observable, Subscription, filter, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ILike } from '../shared/interfaces/like';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movie$$ = new BehaviorSubject<undefined | null | IMovie>(undefined);

  movie$ = this.movie$$
    .asObservable()
    .pipe(filter((val): val is IMovie | null => val !== undefined));

  movie: IMovie | null = null;

  isLiked: boolean = false;

  subscription: Subscription;

  constructor(private http: HttpClient, private router: Router) {
    this.subscription = this.movie$.subscribe((response) => {
      this.movie = response;
    });
  }

  createMovie(data: {}) {
    console.log(data);
    return this.http.post<any>(`${apiUrl}/movie/create`, data, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }

  likeMovie(id: string, data: {}) {
    return this.http
      .post<IMovie>(`${apiUrl}/${id}/like`, data, {
        headers: { 'x-authorization': getSession().accessToken },
      })
      /* .pipe(tap((v) => console.log(`liked movie ${v._ownerId}`))); */
  }

  dislikeMovie(id: string, data: {}) {
    return this.http
      .post<IMovie>(`${apiUrl}/${id}/dislike`, data, {
        headers: { 'x-authorization': getSession().accessToken },
      })
      /* .pipe(
        tap((_) => {
          console.log(`disliked movie ${id}`);
        })
      ); */
  }

  deleteMovie(id: string) {
    return this.http.delete<IMovie>(`${apiUrl}/${id}`, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }

  editMovie(id: string, data: {}) {
    return this.http.put<any>(`${apiUrl}/${id}/edit`, data, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }

  addMovie(id: string, data: {}) {
    return this.http.post<any>(`${apiUrl}/${id}/add`, data, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }

  removeFromWatchlist(id: string) {
    return this.http.post<any>(`${apiUrl}/remove/${id}`, {}, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }
}
