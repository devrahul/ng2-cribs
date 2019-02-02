import { Component, OnInit, Pipe } from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';
import { SortByPipe } from '../pipes/sort-by.pipe';
import { ICribItems } from './../model/interfaces/crib';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-crib-listing',
  templateUrl: 'crib-listing.component.html',
  styleUrls: ['crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
  cribs: Observable<ICribItems[]>;
  error = '';
  sortField = 'price';
  sortDirection = 'asc';
  renderCribDisplay = 'grid';
  sortFields: String[] = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];

  constructor(
    private cribsService: CribsService,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cribs = this.cribsData();
    //let data = localStorage.getItem('newCrib');
    /*this.cribsService.newCribSubject.subscribe(
      data => (this.cribs = [data, ...this.cribs])
    );*/
  }

  cribsData() {
    return this.cribsService.getAllCribs();
  }

  addMoreCrib() {
    const link = ['addprop'];
    this.router.navigate(link);
  }
  renderCribs(type) {
    this.renderCribDisplay = type;
  }
}
