import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransformersService {
  constructor(private http: HttpClient) {}

  getTranformersList(): Observable<any[]> {
    return this.http.get('http://localhost:3000/api/transformers').pipe(
      map((response: any) =>
        response.status && response.data ? response.data : []
      ),
      catchError((error) => {
        return of(null as []);
      })
    );
  }
}
