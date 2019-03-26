import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './modules/home/home.module';
import {TvShowsModule} from './modules/tv-shows/tv-shows.module';
import {MovieModule} from './modules/movie/movie.module';
import {PeopleModule} from './modules/people/people.module';


import {MatInput} from '@angular/material';
import {FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    SharedModule,
    TvShowsModule,
    MovieModule,
    PeopleModule,
    // MatInput,
    // FormControl,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
