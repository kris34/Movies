import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieResolver  {
  constructor(private api: ApiService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IMovie | null | Observable<IMovie | null> | Promise<IMovie> {
    const movieId = route.params['id'];

    return this.api.loadMovie(movieId).pipe(
      catchError((err) => {
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }
}
