import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tv-shows-info',
  templateUrl: './tv-shows-info.component.html',
  styleUrls: ['./tv-shows-info.component.scss']
})
export class TvShowsInfoComponent implements OnInit {
tv: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.tv = data.tv;
    });
  }

}
