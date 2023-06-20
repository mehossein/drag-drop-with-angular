import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, throwError, timeout } from 'rxjs';
import { Router } from '@angular/router';
import { CookieHandler } from './classes/cookie.class';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  constructor(private readonly router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!window.navigator.onLine) {
      return EMPTY;
    }
    let token = CookieHandler.getToken();
    if (!Boolean(token)) {
      return EMPTY;
    }

    let requestInstance: HttpRequest<any> = req;
    requestInstance = requestInstance.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(req).pipe(
      timeout(30000),
      catchError((error: HttpErrorResponse) => this._errorHandler(error))
    );
  }

  private _errorHandler(error: HttpErrorResponse): Observable<never> {
    switch (error.status) {
      case 403:
      case 401:
        this.router.navigate(['auth/login']);
        return throwError(() => error);
      case 404:
        return throwError(() => error);
      default:
        return throwError(() => error);
    }
  }
}
