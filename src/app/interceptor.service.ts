import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTHORIZATION, HPAPPTOKEN } from './app.strings';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({ setHeaders: { 'Authorization': AUTHORIZATION, 'hpApp-Token': HPAPPTOKEN } });
    return next.handle(request);
  }
}
