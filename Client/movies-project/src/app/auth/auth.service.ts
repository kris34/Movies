import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, filter, Subscription, tap } from 'rxjs';
import { IUser } from '../shared/interfaces/user';
import { setSession } from '../shared/sessions';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);

  user$ = this.user$$
    .asObservable()
    .pipe(filter((val): val is IUser | null => val !== undefined));

  user: IUser | null = null;

  isLogged: boolean = false;

  subscription: Subscription;

  get isLoggedIn() {
    return this.user != null;
  }

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  register(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/register`, userData, {withCredentials: true}).pipe(
      tap((user) => {
        this.user$$.next(user);
        setSession(user);
      })
    );
  }

  login(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/auth/login`, userData,  {withCredentials: true}).pipe(
      tap((user) => {
        this.user$$.next(user);
        setSession(user);
      })
    );
  }

  setUserInfo(user: IUser | null, status: boolean) {
    return (this.user = user), (this.isLogged = status);
  }
}
