import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatiscsPageRoutingModule } from './statiscs-routing.module';

import { StatiscsPage } from './statiscs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatiscsPageRoutingModule
  ],
  declarations: [StatiscsPage]
})
export class StatiscsPageModule {}
