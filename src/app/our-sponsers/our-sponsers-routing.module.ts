import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurSponsersPage } from './our-sponsers.page';

const routes: Routes = [
  {
    path: '',
    component: OurSponsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurSponsersPageRoutingModule {}
