import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTHORIZATION, HPAPPTOKEN, BASE_URL, ROUTE_WEBQUERY, ROUT_PDFRESOLVE } from './app.strings';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url === ROUTE_WEBQUERY || request.url === ROUT_PDFRESOLVE) {
      request = request.clone({
        setHeaders: {
          'Authorization': AUTHORIZATION,
          'hpApp-Token': HPAPPTOKEN
        },
        url: BASE_URL + request.url,
      });
    }
    return next.handle(request);
  }
}
