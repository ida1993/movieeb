import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './modules/home/home.module';
import {TvShowsModule} from './modules/tv-shows/tv-shows.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    SharedModule,
    TvShowsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
