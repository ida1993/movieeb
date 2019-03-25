import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})

export class TvShowsComponent implements OnInit {
  @Input() tv;
  constructor() { }

  ngOnInit() {
  }

}
