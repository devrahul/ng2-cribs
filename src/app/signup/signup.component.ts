import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserItems } from './../model/interfaces/users';
import { Address } from './../model/interfaces/address';
import { Geo } from './../model/interfaces/geo';
import { ICountryData, IStateData } from './../model/country-data-type';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { CountryDataService } from './../services/country-data.service';
import { Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-psignup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  RegForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isFormSubmitted: false;
  countries: ICountryData[];
  states: IStateData[];
  countryData: ICountryData[];

  constructor(
    private countryDataServices: CountryDataService,
    private rt: Router,
    _fb: FormBuilder
  ) {}

  ngOnInit() {
    this._getCountries();
    this._getStates();
  }

  _getCountries() {
    this.countryDataServices.getCountrylist().subscribe(ctry => {
      this.countryData = ctry as ICountryData[];
    });
  }

  _getStates() {
    return this.countryDataServices.getStateList().subscribe(states => {
      this.states =  states as IStateData[];
    });
  }

  selectStates(stateId: number) {
    if (stateId > 0) {
      return this.countryDataServices
        .getStatesByCountryId(stateId)
        .subscribe(data => this.states = data);
    } else {
      return this._getStates();
    }
  }

  doRegister(signupForm: FormControl) {
    const data = localStorage.setItem(
      'ObjData',
      JSON.stringify(signupForm.value)
    );
    console.log('Successful registration');
    this.rt.navigateByUrl('/thankyou');
    console.log(signupForm);
  }
}
