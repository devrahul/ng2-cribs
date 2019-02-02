import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule , HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// pipe
 import { SafePipe } from './utility/safe.pipe';
 import { LimitPipe } from './utility/limit.pipe';
// component
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// import  { LazyModule } from './lazy.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SafePipe,
    LimitPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientJsonpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
