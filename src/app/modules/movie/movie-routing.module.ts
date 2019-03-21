import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopRatedMoviesComponent} from './pages/top-rated-movies/top-rated-movies.component';
import {MovieInfoComponent} from './pages/movie-info/movie-info.component';
import {MovieResolver} from '../../core/resolvers/MovieResolver';


const routes: Routes = [
  {
    path: 'top-rated',
    component: TopRatedMoviesComponent
  },
  {
    path: ':id',
    component: MovieInfoComponent,
    resolve: {
      movie: MovieResolver
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
