import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HPAPPTOKEN } from '../../app.strings';
import { ActivatedRoute } from '@angular/router';
import { getToken } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private readonly ROUTE_WEBQUERY = 'persons/webquery';
  private readonly ROUTE_PDFRESOLVE = 'events/resolveFileUrl';
  public token;
  constructor(private routes: ActivatedRoute) {
    this.getToken().subscribe(data => { this.token = data; });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url === this.ROUTE_WEBQUERY || request.url === this.ROUTE_PDFRESOLVE) {

      request = request.clone({ setHeaders: { 'hpApp-Token': HPAPPTOKEN } });
    }
    // return next.handle(request);
    return next.handle(request.clone({ setHeaders: { 'hpApp-Token': this.token } }));

  }

  getToken(): Observable<any> {
    return Observable.create(observer => {
      this.routes.queryParams.subscribe(data => {
        console.log(data['token']);
        observer.next(data['token']);
      }, err => {
        observer.error(err);
      });
    });
  }
}
