import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './app.strings';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {

  }

  getRepos(userName: string, Page: string, sort: string): Observable<any> {
    return Observable.create(observer => {
      const params = new HttpParams().set('page', Page).set('sort', sort);
      console.log(params);
      this.http.get(BASE_URL + 'users/' + userName + '/repos', { params }).subscribe(data => {
        console.log(data);
        observer.next(data);
      });
    });
  }
}
