import { Component, Input } from '@angular/core';
import { PhotoStockType, PhotoStockCategoriesType } from '../model/photo-stock-type';
import { PhotostockComponent } from './../photostock/photostock.component';

@Component({
  selector: 'app-photo-category',
  templateUrl: './photo-category.component.html',
  styleUrls: ['./photo-category.component.css']
})
export class PhotoCategoryComponent {

  @Input('categories') categories: PhotoStockCategoriesType;
  @Input('errors') errors;

  constructor() {}
}
