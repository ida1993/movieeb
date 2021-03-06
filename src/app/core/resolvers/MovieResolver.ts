import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MoviesService} from '../services/movies.service';

@Injectable({
  providedIn: 'root'
})

/**
 *
 */
export class MovieResolver implements Resolve<any> {
  /**
   *
   * @param movieService
   */
  constructor(private movieService: MoviesService) {}

  /**
   *
   * @param route
   * @param state
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.movieService.getMovie(route.params.id);
  }
}
