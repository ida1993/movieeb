import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from '../../../../services/movies.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
  @Input() moviesData: any;
  upcomingMovies: any;


  constructor(private movieService: MoviesService) {
    // get upcoming movie
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcomingMovies = data['results'];
      console.log(this.upcomingMovies);
    });
  }

  ngOnInit() {
  }

}
