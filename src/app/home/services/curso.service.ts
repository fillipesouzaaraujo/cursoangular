import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { CURSOS } from '../mocks/curso.mock';

@Injectable()
export class CursoService {

  constructor() {
  }

  listar(): Promise<Curso[]> {
    return Promise.resolve(CURSOS);
  }

}
