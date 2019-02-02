import { throwError as observableThrowError, Observable, interval, timer } from 'rxjs';
import { map, catchError, shareReplay, switchMap,  } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { IRandomUser, UserItems} from '../model/random-user-type';

const apiEndpoint = 'https://randomuser.me/api/?';
const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;
@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  limit: Number = 100;
  private cache$: Observable<UserItems[]>;
  private apiEndpointURL = apiEndpoint + 'results=' + this.limit;
  constructor(private rndUserServices: HttpClient) {}

  getAllRandomUsers(): Observable<UserItems[]> {

    if (!this.cache$) {
      const timer$ = timer(0, REFRESH_INTERVAL);
      this.cache$ = timer$.pipe(
        switchMap( _ => this.requestUesrs()),
        shareReplay(CACHE_SIZE),
      );
      console.warn(this.cache$);
      console.log('Serving data Without Cache =====', this.cache$);
    }
    console.log('Serving data with Cache =====', this.cache$);
    return this.cache$;
  }

  private requestUesrs() {
    return  this.rndUserServices.get<IRandomUser>(this.apiEndpointURL).pipe(
      map(res => res.results ),
      catchError((err: HttpErrorResponse | any) => {
        const errorDetails = err;
        return observableThrowError(errorDetails);
      })
    );
  }


  getUserByLimit(limit: any) {
    const apiEndpointURL = apiEndpoint + 'results=' + limit;
    return this.rndUserServices.get(apiEndpointURL).pipe(
      map(res => JSON.parse(JSON.stringify(res) ).results)),
      catchError((err: HttpErrorResponse | any) => {
        const errorDetails = err;
        return observableThrowError(errorDetails);
      });
  }
}
