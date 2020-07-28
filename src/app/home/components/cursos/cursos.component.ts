import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];
  categorias: any[] = [
    { id: 0, descricao: 'Negócios', selecionada: true },
    { id: 1, descricao: 'Design', selecionada: false },
    { id: 2, descricao: 'Fotografia', selecionada: false }
  ];
  carregando = false;

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.listarCursos();
  }

  selecionarCurso($event: Curso): void {
  }

  selecionaCategoria(item: any): void {
    item.selecionada = true;
    this.categorias.map(categoria => {
      if (categoria.id !== item.id) {
        categoria.selecionada = false;
      }
    });

    this.listarCursos();
  }

  listarCursos(): void {
    this.carregando = true;
    this.cursos = [];
    setTimeout(() => {
      this.cursoService.listar().then(cursos => {
        this.cursos = cursos;
        this.carregando = false;
      });
    }, 1000);
  }

}
