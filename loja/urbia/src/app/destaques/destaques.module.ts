import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestaquesPageRoutingModule } from './destaques-routing.module';

import { DestaquesPage } from './destaques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestaquesPageRoutingModule
  ],
  declarations: [DestaquesPage]
})
export class DestaquesPageModule {}
