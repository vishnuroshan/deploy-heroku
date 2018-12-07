import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResolvefileService {

  constructor(private http: HttpClient) { }

  resolveFile()
}
