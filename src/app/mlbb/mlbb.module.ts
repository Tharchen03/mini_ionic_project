import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MLBBPageRoutingModule } from './mlbb-routing.module';

import { MLBBPage } from './mlbb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MLBBPageRoutingModule
  ],
  declarations: [MLBBPage]
})
export class MLBBPageModule {}
