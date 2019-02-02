import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { IUserItems } from 'app/model/interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiEndPoint: string;
  constructor(private _http: HttpClient) {
    this.apiEndPoint = 'https://jsonplaceholder.typicode.com/users/';
  }

  getAllUsers(): Observable<IUserItems[]> {
    return this._http
      .get(this.apiEndPoint, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'token'
        })
      })
      .pipe(
        map(res => <IUserItems[]>res),
        catchError((err: HttpErrorResponse) => {
          const details = err.message;
          console.log(observableThrowError(details));
          return observableThrowError(err);
        })
      );
  }
}
