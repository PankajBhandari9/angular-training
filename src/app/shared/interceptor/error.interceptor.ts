import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      // error handling part of the error response
      catchError((err) => {
        
        console.log(err);
        
        return throwError(() => {
          return {
            status: err.status,
            statusText: err.statusText,
            error: err.error
          };
        })
      })
    );
  }
}
