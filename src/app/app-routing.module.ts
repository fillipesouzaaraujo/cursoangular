import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Home'
    },
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    data: {
      breadcrumb: 'Gestão de Conteúdo'
    },
    loadChildren: () => import('./gestao-de-conteudo/gestao-de-conteudo.module').then(m => m.GestaoDeConteudoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
