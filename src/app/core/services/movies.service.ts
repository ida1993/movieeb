import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  URLbase = 'https://api.themoviedb.org/3/';
  apiKey = '2fc53b39ed65d39d9c857b0d13cf4c65';
  upcoming = 'movie/upcoming?';
  popularMovies = 'discover/movie?sort_by=popularity.desc';
  popularTvShow = 'tv/popular?';
  popularPeople = 'person/popular?';

  constructor(private _http: HttpClient) {
  }

  getMovie(id: number) {
    return this._http.get(this.URLbase + 'movie/' + id + '?api_key=' + this.apiKey);
  }

  getUpcomingMovies() {
    return this._http.get(this.URLbase + this.upcoming + '&api_key=' + this.apiKey);
  }

  getTopRatedMovies() {
    return this._http.get(this.URLbase + this.popularMovies + '&api_key=' + this.apiKey);
  }

  getTopRatedTV() {
    return this._http.get(this.URLbase + this.popularTvShow + '&api_key=' + this.apiKey);
  }

  getPopularPeople() {
    return this._http.get(this.URLbase + this.popularPeople + '&api_key=' + this.apiKey);
  }

  getPeople(id: number) {
    return this._http.get(this.URLbase + 'person/' + id + '?api_key=' + this.apiKey);
  }

  search(searchString: string) {
    return this._http.get(this.URLbase + 'search/multi?query=' + searchString + '&api_key=' + this.apiKey);
  }
}
