import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @Input() imgURL: string;
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() nota?: string;
  @Input() valor?: string;
  @Input() desconto?: string;
  @Input() classificacao?: string;
  @Input() object?: any;
  @Output() cardSelecionado: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ngAfterViewInit() {
  }

  ngOnChanges(event: SimpleChanges) {
    console.log(event);
  }

  retornarCurso() {
    this.cardSelecionado.emit(this.object);
  }

}
