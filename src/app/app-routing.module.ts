import { NgModule } from '@angular/core';
import {HomeModule} from './modules/home/home.module';
import {RouterModule, Routes} from '@angular/router';
import {TvShowsModule} from './modules/tv-shows/tv-shows.module';
import {MovieModule} from './modules/movie/movie.module';
import {PeopleModule} from './modules/people/people.module';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule
  },
  {
    path: 'tv-shows',
    loadChildren: () => TvShowsModule
  },
  {
    path: 'movies',
    loadChildren: () => MovieModule
  },
  {
    path: 'people',
    loadChildren: () => PeopleModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
