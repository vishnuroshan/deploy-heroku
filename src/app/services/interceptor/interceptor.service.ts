import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTHORIZATION, HPAPPTOKEN } from '../../app.strings';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private readonly ROUTE_WEBQUERY = 'persons/webquery';
  private readonly ROUTE_PDFRESOLVE = 'events/resolveFileUrl';
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url === this.ROUTE_WEBQUERY || request.url === this.ROUTE_PDFRESOLVE) {
      request = request.clone({
        setHeaders: {
          'Authorization': AUTHORIZATION,
          'hpApp-Token': HPAPPTOKEN
        },
        url: environment['API_URL'] + request.url
      });
    }
    return next.handle(request);
  }
}
