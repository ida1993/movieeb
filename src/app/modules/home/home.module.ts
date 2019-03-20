import { NgModule } from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { TopRatedMoviesComponent } from './pages/top-rated-movies/top-rated-movies.component';
import { PopularPeopleComponent } from './pages/popular-people/popular-people.component';
import { TopRatedTvshowsComponent } from './pages/top-rated-tvshows/top-rated-tvshows.component';

@NgModule({
  declarations: [
    TopRatedMoviesComponent,
    PopularPeopleComponent,
    TopRatedTvshowsComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
