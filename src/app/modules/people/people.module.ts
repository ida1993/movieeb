import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PeopleRoutingModule} from './people-routing.module';
import {PopularPeopleComponent} from './pages/popular-people/popular-people.component';
import { PeopleInfoComponent } from './pages/people-info/people-info.component';

@NgModule({
  declarations: [
    PopularPeopleComponent,
    PeopleInfoComponent
  ],
  imports: [
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule { }
