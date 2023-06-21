import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/shared/interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class ResolverResolver implements Resolve<IMovie | null> {
  constructor(private api: ApiService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IMovie | null | Observable<IMovie> | Promise<IMovie> {
    const movieId = Number(route.params['id']);
    if (!movieId) {
      this.router.navigate(['/theme/recent']);
      return null;
    }
    return this.api.loadMovie(movieId);
  }
}
