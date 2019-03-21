import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PeopleRoutingModule} from './people-routing.module';
import {PopularPeopleComponent} from './pages/popular-people/popular-people.component';

@NgModule({
  declarations: [
    PopularPeopleComponent
  ],
  imports: [
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule { }
