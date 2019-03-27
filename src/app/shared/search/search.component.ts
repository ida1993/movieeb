import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../core/services/movies.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  searchResult: any;
  searchString: string;

  /**
   * @param moviesService
   */
  constructor(private moviesService: MoviesService) {
    this.searchResult = [];
  }

  /**
   *
   */
  ngOnInit() {
  }

  /**
   *
   * @param event
   */
  search(event) {
    if (event.key === 'Enter') {
      this.moviesService.search(this.searchString).subscribe(data => {
        this.searchResult = data['results'];
        console.log(this.searchResult[0]);
      });
    }
  }
}
