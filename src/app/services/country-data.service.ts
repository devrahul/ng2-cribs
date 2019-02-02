import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { SignupComponent } from 'app/signup/signup.component';
import { ICountryData, IStateData } from './../model/country-data-type';
@Injectable({
  providedIn: 'root'
})
export class CountryDataService {
  constructor(private _http: HttpClient) {}

  getCountrylist() {
    // http://services.groupkt.com/country/get/all
    return this._http.get('data/countrylist.json').pipe(map(resp => resp));
  }

  getStateList() {
    return this._http.get('data/statelist.json').pipe(map(resp => resp));
  }

  getStatesByCountryId(id: number): Observable<IStateData[]> {
    return this._http.get('data/statelist.json').pipe(
      map(res => {
        const data = [];
        const respnse = res as IStateData[];
        const req = respnse.filter(item => {
          if (item.id === id) {
            return data.push(item);
          }
        });
        if (data.length > 0) {
          return data;
        }
      })
    );
  }
}
