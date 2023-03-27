import { Injectable, Provider } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  token: string | null = null;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // --- If storing a token in local storage
    // this.token = localStorage.getItem('token')
    // if(this.token && !req.url.includes('api.ipify.org')){
    //     return next.handle(req.clone({ setHeaders: { 'X-Authorization': this.token}, withCredentials: true}));
    // }else{
    // }

    return next.handle(req.clone({ withCredentials: true }));
  }
}
export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
