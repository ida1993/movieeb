import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from '../../../../core/services/movies.service';

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.scss']
})
export class PopularPeopleComponent implements OnInit {
  @Input() popularPeople: any;


  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {

    // Get popular people
    this.movieService.getPopularPeople().subscribe(data => {
      this.popularPeople = data['results'];
    });
  }

}
