import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() header!: string;
  @Input() visible!: boolean;
  @Output() modalClose = new EventEmitter<boolean>();
  @Input() titulo!: string;
  @Input() style!: string;
  @Input() descricaoProjeto!: string;
  @Input() link!: string;
  @Input() nomeBotao!: string;
  @Input() idCard!: number;
  @Input() modalWidth!: string;
  @Input() tags!: string[];

  constructor() {
    // this.titulo = 'TITULOO'
  }

  fecharModal() {
    // Emitir evento de fechamento do modal
    this.modalClose.emit(true);
  }
}
