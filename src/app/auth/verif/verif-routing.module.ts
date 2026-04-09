import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifPage } from './verif.page';

const routes: Routes = [
  {
    path: '',
    component: VerifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifPageRoutingModule {}
