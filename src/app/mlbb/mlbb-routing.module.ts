import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MLBBPage } from './mlbb.page';

const routes: Routes = [
  {
    path: '',
    component: MLBBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MLBBPageRoutingModule {}
