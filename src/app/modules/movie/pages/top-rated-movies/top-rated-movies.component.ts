import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from '../../../../core/services/movies.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
  @Input() popularMovies: any;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {

  // Get popular movies
    this.movieService.getTopRatedMovies().subscribe(data => {
      this.popularMovies = data['results'];
      // console.log(this.popularMovies);
    });


  }

}
