import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  links = [
    {
      coluna: 1,
      itens: [
        { url: '', descricao: 'Udemy for Business' },
        { url: '', descricao: 'Ensine no Udemy' },
        { url: '', descricao: 'Obtenha o aplicativo' },
        { url: '', descricao: 'Quem somos' },
        { url: '', descricao: 'Fale conosco' }
      ]
    },
    {
      coluna: 2,
      itens: [
        { url: '', descricao: 'Carreiras' },
        { url: '', descricao: 'Blog' },
        { url: '', descricao: 'Ajuda e Suporte' },
        { url: '', descricao: 'Filial' }
      ]
    },
    {
      coluna: 3,
      itens: [
        { url: '', descricao: 'Termos da Udemy' },
        { url: '', descricao: 'Política de Privacidade e Cookies' },
        { url: '', descricao: 'Mapa do site' },
        { url: '', descricao: 'Cursos em destaque' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
