import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifPageRoutingModule } from './verif-routing.module';

import { VerifPage } from './verif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifPageRoutingModule
  ],
  declarations: [VerifPage]
})
export class VerifPageModule {}
