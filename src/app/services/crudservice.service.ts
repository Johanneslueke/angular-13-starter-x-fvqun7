import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpParamsOptions,
} from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CRUDServiceService {
  constructor(private http: HttpClient) {}

  /**
   * could implement how we handel errors. this implementation
   * only returns the revcieved error to the requester.
   *
   * @param err - any because the http client api does not know the type
   * @param expected - Observable<T> the expected objects as an observable.
   */
  private errorHandler<T>(err: any, expected: Observable<T>) {
    return of(err);
  }

  /**
   * create a new object with the provided data
   */
  create<T>(
    route: string,
    data: T,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.post<{ data: T }>(route, data, { headers, params }).pipe(
      map((response) => response.data),
      catchError(this.errorHandler)
    );
  }

  /**
   * returns the object specified in the URL or Parameters
   */
  read<T>(
    route: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.get<{ data: T }>(route, { headers, params }).pipe(
      map((response) => response.data),
      catchError(this.errorHandler)
    );
  }

  /**
   * returns the changed object
   */
  update<T>(
    route: string,
    change?: Partial<T>,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.put<{ data: T }>(route, change, { headers, params }).pipe(
      map((response) => response.data),
      catchError(this.errorHandler)
    );
  }

  /**
   * returns the deleted item
   */
  delete<T>(
    route: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.delete<{ data: T }>(route, { headers, params }).pipe(
      map((response) => response.data),
      catchError(this.errorHandler)
    );
  }
}
