import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// component
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticlesComponent } from './articles/articles.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';

import { UserlistComponent } from './userlist/userlist.component';
import { PropertydetailsComponent } from './propertydetails/propertydetails.component';
import { FAQComponent } from './faq/faq.component';
import { PhotostockComponent } from './photostock/photostock.component';

import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { SignUpSuccessComponent } from './sign-up-success/sign-up-success.component';
import { WelcomeComponent } from 'app/welcome/welcome.component';

import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { QuickSearchComponent } from './shared/quick-search/quick-search.component';
import { SortByPipe } from './pipes/sort-by.pipe';
const appState: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'login', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: SignupComponent },
  { path: 'properties', component: CribListingComponent },
  { path: 'property/:id', component: PropertydetailsComponent },
  { path: 'addprop', component: AddListingFormComponent },
  { path: 'posts', component: ArticlesComponent },
  { path: 'users', component: UserlistComponent },
  { path: 'photostock', component: PhotostockComponent },
  { path: 'search', component: SearchComponent },
  { path: 'addnewuser', component: AddnewuserComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appState, { useHash: true, enableTracing: false })
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent,
    PagenotfoundComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent,
    ArticlesComponent,
    PostComponent,
    SearchComponent,
    UserlistComponent,
    PropertydetailsComponent,
    FAQComponent,
    PhotostockComponent,
    PhotoCategoryComponent,
    RandomUserComponent,
    AddnewuserComponent,
    VideolistComponent,
    VideoDetailsComponent,
    SignUpSuccessComponent,
    WelcomeComponent,
    QuickSearchComponent,
    SortByPipe
  ],
  exports: [RouterModule, SortByPipe]
})
export class AppRoutingModule {}
