import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request.headers.append('x-rapidapi-host', 'v3.football.api-sports.io');
    request.headers.append(
      'x-rapidapi-key',
      '3f7b52eb135d7b3d00902c77015e2b91'
    );

    const authReq = request.clone({
      headers: request.headers
        .set('x-rapidapi-host', 'v3.football.api-sports.io')
        .set('x-rapidapi-key', '3f7b52eb135d7b3d00902c77015e2b91'),
    });

    return next.handle(authReq);
  }
}
