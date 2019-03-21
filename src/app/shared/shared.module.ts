import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {SearchComponent} from './search/search.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../modules/home/pages/home/home.component';
import {MovieComponent} from './movie/movie.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    SearchComponent,
    TopMenuComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    HomeComponent,
    MovieComponent,
    PeopleComponent,
    SearchComponent,
    TopMenuComponent
  ]
})
export class SharedModule { }
