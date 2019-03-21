import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PopularPeopleComponent} from './pages/popular-people/popular-people.component';


const routes: Routes = [
  {
    path: 'popular',
    component: PopularPeopleComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {
}
