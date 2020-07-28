import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: ApresentacaoComponent
      },
      {
        path: 'quem-somos',
        component: QuemSomosComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'curso/:titulo',
        component: CadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
