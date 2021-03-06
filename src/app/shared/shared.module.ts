import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {SearchComponent} from './search/search.component';
import {RouterModule} from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {PeopleComponent} from './people/people.component';
import {FormsModule} from '@angular/forms';
import {TvShowsComponent} from './tv-shows/tv-shows.component';
import {ClickOutsideModule} from 'ng-click-outside';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MovieComponent,
    SearchComponent,
    TopMenuComponent,
    TvShowsComponent,
    PeopleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClickOutsideModule
  ],
  exports: [
    CommonModule,
    MovieComponent,
    PeopleComponent,
    SearchComponent,
    TvShowsComponent,
    TopMenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
