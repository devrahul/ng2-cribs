import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

import { ICribItems } from './../model/interfaces/crib';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CribsService {
  public newCribSubject = new Subject<any>();
  private data: any;
  constructor(private http: HttpClient) {}

  getAllCribs(): Observable<ICribItems[]> {
    return this.http.get<ICribItems[]>('data/cribs.json');
  }

  getCrib(id: number): Observable<ICribItems[]> {
    return this.getAllCribs().pipe( map( items =>
      items.filter(item => item.id === id))
    );
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
    localStorage.setItem('newCrib', data);
  }
}
