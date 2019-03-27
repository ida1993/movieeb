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
  constructor(private route: ActivatedRoute) { }

  /**
   *
   */
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.movie = data.movie;
    });
  }
}
