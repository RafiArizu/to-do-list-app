import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatiscsPage } from './statiscs.page';

const routes: Routes = [
  {
    path: '',
    component: StatiscsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatiscsPageRoutingModule {}
