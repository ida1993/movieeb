import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopRatedTvshowsComponent} from './pages/top-rated-tvshows/top-rated-tvshows.component';
import {TvShowsInfoComponent} from './pages/tv-shows-info/tv-shows-info.component';
import {TvResolver} from '../../core/resolvers/TvResolver';


const routes: Routes = [
  {
    path: 'top-rated',
    component: TopRatedTvshowsComponent
  },
  {
    path: ':id',
    component: TvShowsInfoComponent,
    resolve: {
      tv: TvResolver
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowsRoutingModule {
}
