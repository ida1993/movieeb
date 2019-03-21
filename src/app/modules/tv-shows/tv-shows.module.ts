import {NgModule} from '@angular/core';
import {TopRatedTvshowsComponent} from './pages/top-rated-tvshows/top-rated-tvshows.component';
import {SharedModule} from '../../shared/shared.module';
import {TvShowsRoutingModule} from './tv-shows-routing.module';

@NgModule({
  declarations: [
    TopRatedTvshowsComponent
  ],
  imports: [
    TvShowsRoutingModule,
    SharedModule
  ]
})
export class TvShowsModule { }
