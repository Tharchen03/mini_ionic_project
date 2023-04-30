import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchshedulePage } from './matchshedule.page';

const routes: Routes = [
  {
    path: '',
    component: MatchshedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchshedulePageRoutingModule {}
