import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  private getOptions(headers?: object): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...headers
      })
    };
  }

  public get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(
      `${environment.baseUrl}/${path}`,
      this.getOptions()
    );
  }

  public post<T>(path: string, payload: any): Observable<T> {
    return this.httpClient.post<T>(
      `${environment.baseUrl}/${path}`,
      payload,
      this.getOptions()
    );
  }

  public put<T>(path: string, payload: any): Observable<T> {
    return this.httpClient.put<T>(
      `${environment.baseUrl}/${path}`,
      payload,
      this.getOptions()
    );
  }

  public patch<T>(path: string, payload: any): Observable<T> {
    return this.httpClient.patch<T>(
      `${environment.baseUrl}/${path}`,
      payload,
      this.getOptions()
    );
  }

  public delete<T>(path: string): Observable<T> {
    return this.httpClient.delete<T>(
      `${environment.baseUrl}/${path}`,
      this.getOptions()
    );
  }
}
