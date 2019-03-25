import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PopularPeopleComponent} from './pages/popular-people/popular-people.component';
import {PeopleInfoComponent} from './pages/people-info/people-info.component';
import {PeopleResolver} from '../../core/resolvers/PeopleResolver';


const routes: Routes = [
  {
    path: 'popular',
    component: PopularPeopleComponent
  },
  {
    path: ':id',
    component: PeopleInfoComponent,
    resolve: {
      people: PeopleResolver
    }

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {
}
