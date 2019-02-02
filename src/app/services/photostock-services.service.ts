import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PhotoStockCategoriesType, PhotoStockType } from '../model/photo-stock-type';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotostockServicesService {
  apiEndPoint: string ;
  constructor(private _httpReq: HttpClient) {
    this.apiEndPoint = 'http://api.bigstockphoto.com/2/883610/categories';
  }

  getPhotoStockCategories() {
    return this._httpReq.jsonp<PhotoStockType>(this.apiEndPoint, 'callback').pipe(
      map(res => res.data),
      catchError((err: HttpErrorResponse) => {
        const details = err.message;
        return observableThrowError(err);
      })
    );
  }
}
