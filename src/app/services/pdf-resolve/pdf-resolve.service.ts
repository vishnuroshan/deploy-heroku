import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ARRAY_BUFFER, APP_PDF, BASE_URL } from 'src/app/app.strings';


@Injectable({
  providedIn: 'root'
})
export class PdfResolveService {
  private readonly ROUTE_PDFRESOLVE = 'sharelive/resolveFileUrl';
  constructor(private http: HttpClient) { }

  resolveURL(filePath: string): Observable<any> {
    const payload = {
      paths: [filePath]
    };
    return Observable.create(observer => {
      this.http.post(BASE_URL + this.ROUTE_PDFRESOLVE, payload).subscribe(success => {
        observer.next(success[0]);
      }, error => {
        observer.error(error);
      });
    });
  }

  getPdf(url): Observable<any> {
    return Observable.create(observer => {
      this.http.get(url, { responseType: ARRAY_BUFFER }).subscribe((file: ArrayBuffer) => {
        const pdf = new Uint8Array(file);
        // create openable url for pdf
        const blob = new Blob([(<any>pdf)], { type: APP_PDF });
        const urls = window.URL.createObjectURL(blob);
        observer.next(urls);
      });
    });
  }
}
