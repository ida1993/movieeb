import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.scss']
})
export class PeopleInfoComponent implements OnInit {
  people: any;

  /**
   *
   */
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.people = this.route.snapshot.data.people;
    // console.log(this.people);
  }

}
