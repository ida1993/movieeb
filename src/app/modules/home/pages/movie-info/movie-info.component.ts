import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../../../services/movies.service';



@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  constructor() { }

  // https://api.themoviedb.org/3/movie/<movie-id>?api:key=<APIKEY>


  ngOnInit() {

    // this.router.params.subscribe((params) => {
    //   const id = params['movieID'];
    //   this.moviesService.getUpcomingMovies(id).subscribe(data => {
    //     this.movie = data;
    //   });
    // }


  }

}
