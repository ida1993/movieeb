import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MoviesService} from '../../core/services/movies.service';
import {Router} from '@angular/router';
import {debounceTime, timeout} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  @ViewChild('searchResults') searchResultsElement: ElementRef<HTMLUListElement>;
  searchResult: any;
  searchString: string;

  onClickedOutside(e: Event) {
    console.log('Clicked outside', e);

    if (e.target instanceof Node && this.searchResultsElement && this.searchResultsElement.nativeElement.contains(e.target)) {
      return;
    } else {
      this.searchResult = [];
    }
  }


  /**
   * @param moviesService
   * @param router
   */
  constructor(private moviesService: MoviesService, private router: Router) {
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
    if (this.searchString && this.searchString.length > 1) {
      console.log(this.searchString);
      this.moviesService.search(this.searchString).subscribe(data => {
        this.searchResult = data['results'];
        console.log(this.searchResult[0]);
        });
    }
    // debounceTime(500);
    // setTimeout( this.searchResult, 5000);
  }

  selectResult(category: string, id: number) {
    this.searchResult = [];
    this.router.navigate([category + '/' + id]);
    // [routerLink]="['movies', result.id]"
  }

  // this.search.valueChanges.subscribe(results => console.log(results));

}

