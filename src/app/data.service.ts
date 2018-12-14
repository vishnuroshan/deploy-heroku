import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BASE_URL, ROUTE_WEBQUERY } from './app.strings';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public param: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  getData(param): Observable<any> {
    return Observable.create(observer => {
      console.log(param);
      const paramData = new HttpParams().set('key', param);
      console.log(paramData);
      if (param) {
        this.http.get(ROUTE_WEBQUERY, { params: paramData }).subscribe(data => {
          console.log('data:', data);
          observer.next(data);
        });
      }



    });
  }
}
