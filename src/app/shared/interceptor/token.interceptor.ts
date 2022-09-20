import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import validateToken from 'src/app/util/validateToken'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // adding token should be applicable to all requests except register and login

    // we considered only 2 end points but in your realtime you may have multiple one
    // so can we hold those end point names in an array and can we check the given end point exists or nt?

    if (request.url.includes('register') || request.url.includes('login')) {
      console.log('inside the token interceptoer for registerand or login');
      return next.handle(request);
    } else if (localStorage.getItem('token') == null) {
      this.router.navigate(['/users/login']);
    }
    // do we need to confirm that whether this token is valid or not?
    if (validateToken()) {
      request = request.clone({
        headers: request.headers.set(
          'authorization',
          localStorage.getItem('token')||''
        ),
      });

      // we need to add the token to the request object via authentication header
    } else {
      this.router.navigate(['/users/login']);
    }
    // /auth : end point to validate the token?
    // here can we perform that rest here ?
    // yes we can do that
    // by injecting the service.

    // for others we have to add this token into the request  object via headers
    return next.handle(request);
  }
}
