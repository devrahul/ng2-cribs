import { Component, OnInit } from '@angular/core';
import { PhotoStockType, PhotoStockCategoriesType } from '../model/photo-stock-type';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { PhotostockServicesService } from '../services/photostock-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photostock',
  templateUrl: './photostock.component.html',
  styleUrls: ['./photostock.component.css'],
})
export class PhotostockComponent implements OnInit {
  error: string;
  categoryData: Observable<PhotoStockCategoriesType[]>;
  apiRoot: String = 'http://api.bigstockphoto.com/2/883610/search/';
  constructor(
    private photostockService: PhotostockServicesService,
    private routeParams: ActivatedRoute,
    private routerNavigation: Router
  ) {}

  ngOnInit() {
    this.categoryData = this.getPhotoStockCategoryData();
    this.routeParams.params.subscribe(params => {
      const category = params.category;
      this.setPhotoStockCategoryUrl(category);
      const apiURL = `${this.apiRoot}`;
      this.apiRoot = apiURL;
    });
  }

  setPhotoStockCategoryUrl(category: string) {
    const apiURL = `${this.apiRoot}?category=${category}&callback=JSONP_CALLBACK`;
    //this.apiRoot = apiURL;
  }

  getPhotoStockCategoryData()  {
    return this.photostockService
      .getPhotoStockCategories();
  }
}
