import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '/properties',
    component: CribListingComponent
  }
];
@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class LazyModule {}
