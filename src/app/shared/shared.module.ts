import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {SearchComponent} from './search/search.component';
import {RouterModule} from '@angular/router';
import {UpcomingMoviesComponent} from '../modules/home/pages/upcoming-movies/upcoming-movies.component';
import {HomeComponent} from '../modules/home/pages/home/home.component';
import {MovieComponent} from './movie/movie.component';

@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    SearchComponent,
    TopMenuComponent,
    UpcomingMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    TopMenuComponent,
    UpcomingMoviesComponent
  ]
})
export class SharedModule { }
