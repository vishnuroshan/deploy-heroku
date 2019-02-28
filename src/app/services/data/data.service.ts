import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { KEY_STRING, TOKEN_STRING, STATUS_STRING, SUCCESS, BASE_URL } from 'src/app/app.strings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly ROUTE_WEBQUERY = 'sharelive/webquery';
  constructor(private http: HttpClient) { }

  public getData(key: string): Observable<any> {
    const mainParam = new HttpParams().set(KEY_STRING, key);
    return Observable.create(observer => {
      this.http.get(BASE_URL + this.ROUTE_WEBQUERY, { params: mainParam })
        .subscribe(data => {
          observer.next(data);
        }, err => {
          observer.error(err);
        });
    });
  }
}

