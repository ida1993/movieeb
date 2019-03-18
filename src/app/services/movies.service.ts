import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  URLbase = 'https://api.themoviedb.org/3/';
  apiKey = '2fc53b39ed65d39d9c857b0d13cf4c65';
  upcoming = 'movie/upcoming?';


  constructor(private _http: HttpClient) { }

  getUpcomingMovies() {
    return this._http.get(this.URLbase + this.upcoming + '&api_key=' + this.apiKey);
  }



  // api_key=2fc53b39ed65d39d9c857b0d13cf4c65&language=en-US&page=

}
