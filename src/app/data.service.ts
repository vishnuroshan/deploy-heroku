import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BASE_URL } from './app.strings';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public param: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  getData(): Observable<any> {
    return Observable.create(observer => {
      this.route.queryParams.subscribe(params => {
        console.log('params', params['personId']);
        const paramData = new HttpParams().set('personId', params['personId']);
        console.log(paramData);
        this.http.get(BASE_URL, { params: paramData }).subscribe(data => {
          console.log('data:', data);
          observer.next(data);
        });
      });


    });
  }
}
