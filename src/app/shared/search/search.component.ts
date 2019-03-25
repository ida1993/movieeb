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

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
  }

  search() {
    this.moviesService.search(this.searchString).subscribe(data => {
      this.searchResult = data['results'];
    });
  }
}
