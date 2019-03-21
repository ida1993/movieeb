import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../../../core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  upcomingMovies: any;

  constructor(private movieService: MoviesService) {

  }

  ngOnInit() {
    // get upcoming movie
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcomingMovies = data['results'];
    });
  }
}
