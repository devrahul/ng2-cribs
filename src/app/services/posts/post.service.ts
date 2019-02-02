import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError, map, flatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IPostItems } from '../../model/interfaces/post';
import { HttpClient, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiEndPoint: string;
  constructor(private _http: HttpClient) {
    this.apiEndPoint = 'https://jsonplaceholder.typicode.com/posts/';
  }

  getAllPosts(): Observable<IPostItems[]> {
    return this._http.get<IPostItems[]>(this.apiEndPoint).pipe(
      map( res =>  {
          return <IPostItems[]>res.map( item => {
            return new IPostItems (
              item.userId,
              item.id,
              item.title,
              item.body );
            });
          })
        );
  }
}
