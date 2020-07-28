import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { CursoService } from './services/curso.service';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CursosComponent,
    QuemSomosComponent,
    CadastroComponent,
    ApresentacaoComponent,
    CursoDetalheComponent
  ],
  providers: [
    CursoService
  ]
})
export class HomeModule { }
