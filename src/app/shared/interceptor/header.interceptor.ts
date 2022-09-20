import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {


    // console.log just to check if intercepter is working
    // aslo intercepter is like a service we have to provide to that module if we want to use it.

    console.log('Hello from the header intercepter');

    // 1. if the request is having headers

    if (request.headers.has('Content-Type')) {
      // application/xml
      // application/png/pdf apart from application/json
      return next.handle(request)
    }

    // 2. If the request is not having headers then chaeck if the requrest has url pattern

    request = request.clone({
      headers: request.headers.set('Content-Type', 'application/json'),
    });


    // read first we can't manipulat the request object directly
    // we have to clone the request obj and provide the additional properties/header

    // manipulate of the req/res
    return next.handle(request); // will give call to next interceptor/resource
  }
}
