import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})

/**
 *
 */
export class MovieInfoComponent implements OnInit {
  movie: any;

  /**
   *
   */
  constructor(private route: ActivatedRoute) {
  }

  /**
   *
   */
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.movie = data.movie;
    });
  }
  //
  // getConfig() {
  //   return 'https://api.themoviedb.org/3/configuration?api_key=2fc53b39ed65d39d9c857b0d13cf4c65';
  // }

  getBackgroundImageCss() {
    return 'url(https://image.tmdb.org/t/p/original' + this.movie.backdrop_path + ')';
  }
}
