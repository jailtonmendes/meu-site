import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() header!: string;
  @Input() visible!: boolean;
  @Input() titulo!: string;
  @Input() style!: string;
  @Input() descricaoProjeto!: string;
  @Input() link!: string;
  @Input() nomeBotao!: string;
  @Input() idCard!: boolean;
  @Input() modalWidth!: string;
  @Input() tags!: [];

  constructor() {
    console.log('titulo', this.titulo)
  }
}
