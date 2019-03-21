import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from '../../../../services/movies.service';

@Component({
  selector: 'app-top-rated-tvshows',
  templateUrl: './top-rated-tvshows.component.html',
  styleUrls: ['./top-rated-tvshows.component.scss']
})
export class TopRatedTvshowsComponent implements OnInit {
  @Input() popularTvShows: any;

  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {

    // Get popular TV shows
    this.movieService.getTopRatedTV().subscribe(data => {
      this.popularTvShows = data['results'];
      console.log(this.popularTvShows);
    });

  }
}
