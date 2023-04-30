import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchshedulePageRoutingModule } from './matchshedule-routing.module';

import { MatchshedulePage } from './matchshedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchshedulePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MatchshedulePage]
})
export class MatchshedulePageModule {}
