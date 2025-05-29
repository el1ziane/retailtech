import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LojaDetalhePageRoutingModule } from './loja-detalhe-routing.module';

import { LojaDetalhePage } from './loja-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LojaDetalhePageRoutingModule
  ],
  declarations: [LojaDetalhePage]
})
export class LojaDetalhePageModule {}
