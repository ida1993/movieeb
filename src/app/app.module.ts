import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TopMenuComponent} from './shared/top-menu/top-menu.component';
import {SearchComponent} from './shared/search/search.component';
import {HomeComponent} from './modules/home/pages/home/home.component';
import {UpcomingMoviesComponent} from './modules/home/pages/upcoming-movies/upcoming-movies.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieComponent } from './shared/movie/movie.component';
import { MovieInfoComponent } from './modules/home/pages/movie-info/movie-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SearchComponent,
    HomeComponent,
    UpcomingMoviesComponent,
    MovieComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
