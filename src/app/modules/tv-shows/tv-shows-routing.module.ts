import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopRatedTvshowsComponent} from './pages/top-rated-tvshows/top-rated-tvshows.component';


const routes: Routes = [
  {
    path: 'top-rated',
    component: TopRatedTvshowsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowsRoutingModule {
}
