import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public param: any;

  private readonly ROUTE_WEBQUERY = 'persons/webquery';
  constructor(private http: HttpClient) { }

  getData(param): Observable<any> {
    return Observable.create(observer => {
      const paramData = new HttpParams().set('key', param);
      console.log(paramData);
      if (param) {
        this.http.get(this.ROUTE_WEBQUERY, { params: paramData }).subscribe(data => {
          console.log('data:', data);
          observer.next(data);
        });
      }
    });
  }
}

