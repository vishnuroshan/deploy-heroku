import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ROUT_PDFRESOLVE } from './app.strings';

@Injectable({
  providedIn: 'root'
})
export class PdfResolveService {

  constructor(private http: HttpClient) { }

  resolveURL(filePath: string): Observable<any> {
    const payload = {
      paths: [filePath]
    };
    return Observable.create(observer => {
      this.http.post(ROUT_PDFRESOLVE, payload).subscribe(success => {
        observer.next(success[0]);
      }, error => {
        observer.error(error);
      });
    });
  }
}
