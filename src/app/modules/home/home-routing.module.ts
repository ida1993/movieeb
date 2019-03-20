import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {TopRatedMoviesComponent} from './pages/top-rated-movies/top-rated-movies.component';
import {TopRatedTvshowsComponent} from './pages/top-rated-tvshows/top-rated-tvshows.component';
import {PopularPeopleComponent} from './pages/popular-people/popular-people.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Top-rated-movies',
    component: TopRatedMoviesComponent
  },
  {
    path: 'Top-rated-tv-shows',
    component: TopRatedTvshowsComponent
  },
  {
    path: 'Popular-people',
    component: PopularPeopleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
