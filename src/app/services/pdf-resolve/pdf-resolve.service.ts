import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PdfResolveService {
  private readonly ROUTE_PDFRESOLVE = 'events/resolveFileUrl';
  constructor(private http: HttpClient) { }

  resolveURL(filePath: string): Observable<any> {
    const payload = {
      paths: [filePath]
    };
    return Observable.create(observer => {
      this.http.post(this.ROUTE_PDFRESOLVE, payload).subscribe(success => {
        observer.next(success[0]);
      }, error => {
        observer.error(error);
      });
    });
  }

  getPdf(url): Observable<any> {
    return Observable.create(observer => {
      this.http.get(url, { responseType: 'arraybuffer' }).subscribe((file: ArrayBuffer) => {
        const pdf = new Uint8Array(file);
        // create openable url for pdf
        const blob = new Blob([(<any>pdf)], { type: 'application/pdf' });
        const urls = window.URL.createObjectURL(blob);
        observer.next(urls);
      });
    });
  }
}
