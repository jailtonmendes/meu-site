import { Component, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { ProjetosModel } from 'src/app/shared/models/Projetos.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  visible!: boolean;
  modalClose!: boolean;
  titulo!: string;
  descricaoProjeto!: string;
  link!: string;
  idCard!: number;
  nomeBotao!: string;
  tags!: string[];
  listaProjetosHome = new Array<ProjetosModel>();

  leiaMais!: boolean;

  @HostBinding('style.width')
  modalWidth = '50vw';

  private resizeSubject = new Subject<void>();
  private resize$: Observable<number> = this.resizeSubject.pipe(
    debounceTime(100),
    map(() => window.innerWidth),
    distinctUntilChanged(),
    shareReplay(1)
  );

  constructor(private router: Router) {
    this.resize$.subscribe((width) => {
      // console.log(width)
      this.updateModalWidth(width);
    });

    this.listaProjetosPrincipais();


  }

  @HostListener('window:resize')
  onResize() {
    this.resizeSubject.next();
  }

  private updateModalWidth(width: number) {
    this.modalWidth = width < 768 ? '100vw' : '50vw';
  }

  projetos() {
    // this.leiaMais = true;
    this.router.navigate(['/projetos']);
  }

  abrirModal(projeto: ProjetosModel) {
    this.visible = !this.visible;

    this.titulo = projeto.titulo
    this.descricaoProjeto = projeto.descricao
    this.nomeBotao = projeto.nomeBotao
    this.tags = projeto.tags
    this.link = projeto.link
  }

  onModalClose(fechouModal: boolean) {
    this.visible = false;
    // console.log('Modal fechou:', fechouModal);
    // Realizar ação desejada após o fechamento do modal
  }



  listaProjetosPrincipais() {
    this.listaProjetosHome = [
      {
        id: 1,
        titulo: 'WebSite Frutas',
        descricao: 'Este projeto é um website desenvolvido com HTML, CSS e JavaScript, com o objetivo de apresentar informações relevantes de maneira clara e acessível. A interface foi criada para oferecer uma experiência de usuário intuitiva, facilitando a navegação e a busca por informações',
        img: '../assets/projeto01.jpg',
        link: 'https://jailtonmendes.dev.br/files-portfolio/projetos/web-site-frutas/',
        nomeBotao: 'Demonstração',
        tags: ['HTML', 'CSS', 'JavaScript']
      },
      {
        id: 1,
        titulo: 'App Quitanda',
        descricao: 'App de Quitanda Virtual desenvolvido em Flutter + GetX: Criação de interface responsiva, telas de login, cadastro, página inicial com categorias e produtos, detalhes do produto, carrinho de compras, pedidos e perfil do usuário, além de animações e recursos adicionais para melhorar a experiência do usuário.',
        img: '../assets/greenGrocer04.png',
        link: 'https://github.com/jailtonmendes/greengrocer-flutter',
        nomeBotao: 'Demonstração',
        tags: ['HTML', 'SASS']
      },
      {
        id: 1,
        titulo: 'App delivery',
        descricao: 'Este projeto foi desenvolvido durante o DartWeek, um evento realizado pela Academia do Flutter. Utilizamos a arquitetura MVC e o padrão Repository, juntamente com as tecnologias Provider e Bloc.',
        img: '../assets/projeto03.png',
        link: 'https://github.com/jailtonmendes/dart-week-vakinha-burguer',
        nomeBotao: 'Ver código',
        tags: ['FLUTTER', 'DART']
      },
      {
        id: 1,
        titulo: 'App de turismo',
        descricao: 'Este é um aplicativo de turismo que desenvolvi como projeto de estudo, utilizando as tecnologias Ionic, Angular e TypeScript',
        img: '../assets/projeto04.png',
        link: 'https://jailtonmendes.dev.br/files-portfolio/projetos/app-turismo-ionic/',
        nomeBotao: 'Demonstração',
        tags: ['Ionic', 'Angular', 'TypeScript']
      }
    ]
  }


}
