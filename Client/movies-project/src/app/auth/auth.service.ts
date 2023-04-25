import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { BehaviorSubject, filter, Subscription, tap } from 'rxjs';
import { IUser } from '../shared/interfaces/user';
import { getSession, setSession } from '../shared/sessions';

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

  constructor(private http: HttpClient, private router: Router) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  register(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/register`, userData).pipe(
      tap((user) => {
        this.user$$.next(user);
        setSession(user);
      })
    );
  }

  login(userData: {}) {
    return this.http.post<IUser>(`${apiUrl}/login`, userData).pipe(
      tap((user) => {
        this.user$$.next(user);
        setSession(user);
      })
    );
  }

  logout() {
    sessionStorage.removeItem('User');
    localStorage.removeItem('User');
    this.setUserInfo(null, false);
    this.router.navigate(['/']);
  }

  edit(data: {}) {
    return this.http.post<any>(`${apiUrl}/edit-profile`, data, {
      headers: { 'x-authorization': getSession().accessToken },
    });
  }

  setUserInfo(user: IUser | null, status: boolean) {
    return (this.user = user), (this.isLogged = status);
  }
}
