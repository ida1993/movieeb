import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MovieRoutingModule} from './movie-routing.module';
import {MovieInfoComponent} from './pages/movie-info/movie-info.component';
import {TopRatedMoviesComponent} from './pages/top-rated-movies/top-rated-movies.component';

@NgModule({
  declarations: [
    MovieInfoComponent,
    TopRatedMoviesComponent
  ],
  imports: [
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }
