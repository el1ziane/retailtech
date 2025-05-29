import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'loja-detalhe',
    loadChildren: () => import('./loja-detalhe/loja-detalhe.module').then( m => m.LojaDetalhePageModule)
  },
  {
    path: 'loja-detalhe/:nome',
    loadChildren: () => import('./loja-detalhe/loja-detalhe.module').then( m => m.LojaDetalhePageModule)
  },
  {
    path: 'destaques',
    loadChildren: () => import('./destaques/destaques.module').then( m => m.DestaquesPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
