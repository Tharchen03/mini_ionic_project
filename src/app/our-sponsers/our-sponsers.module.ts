import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurSponsersPageRoutingModule } from './our-sponsers-routing.module';

import { OurSponsersPage } from './our-sponsers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurSponsersPageRoutingModule
  ],
  declarations: [OurSponsersPage]
})
export class OurSponsersPageModule {}
