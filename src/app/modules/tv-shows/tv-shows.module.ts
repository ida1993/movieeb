import {NgModule} from '@angular/core';
import {TopRatedTvshowsComponent} from './pages/top-rated-tvshows/top-rated-tvshows.component';
import {SharedModule} from '../../shared/shared.module';
import {TvShowsRoutingModule} from './tv-shows-routing.module';
import { TvShowsInfoComponent } from './pages/tv-shows-info/tv-shows-info.component';

@NgModule({
  declarations: [
    TopRatedTvshowsComponent,
    TvShowsInfoComponent
  ],
  imports: [
    TvShowsRoutingModule,
    SharedModule
  ]
})
export class TvShowsModule { }
