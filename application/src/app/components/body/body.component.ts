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
      console.log(width)
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
    console.log('projeto: ', projeto)
    this.visible = !this.visible;

    this.titulo = projeto.titulo
    this.descricaoProjeto = projeto.descricao
    this.nomeBotao = projeto.nomeBotao
    this.tags = projeto.tags
  }



  listaProjetosPrincipais() {
    this.listaProjetosHome = [
      {
        id: 1,
        titulo: 'WebSite Frutas',
        descricao: 'Este projeto é um website desenvolvido com HTML, CSS e JavaScript, com o objetivo de apresentar informações relevantes de maneira clara e acessível. A interface foi criada para oferecer uma experiência de usuário intuitiva, facilitando a navegação e a busca por informações',
        img: '../assets/projeto01.jpg',
        link: 'Link.com.br',
        nomeBotao: 'Demonstração',
        tags: ['HTML', 'CSS', 'JavaScript']
      },
      {
        id: 1,
        titulo: 'WebSite Agency',
        descricao: 'Este projeto é um layout desenvolvido utilizando HTML e SASS, com o objetivo de criar uma interface atraente e funcional. A linguagem SASS permite uma escrita mais organizada e modular do CSS, resultando em um código mais limpo e fácil de manter.',
        img: '../assets/projeto02.png',
        link: 'Link.com.br',
        nomeBotao: 'Demonstração',
        tags: ['HTML', 'SASS']
      },
      {
        id: 1,
        titulo: 'App delivery',
        descricao: 'Este projeto foi desenvolvido durante o DartWeek, um evento realizado pela Academia do Flutter. Utilizamos a arquitetura MVC e o padrão Repository, juntamente com as tecnologias Provider e Bloc.',
        img: '../assets/projeto03.png',
        link: 'Link.com.br',
        nomeBotao: 'Demonstração',
        tags: ['FLUTTER', 'DART']
      },
      {
        id: 1,
        titulo: 'App de turismo',
        descricao: 'Este é um aplicativo de turismo que desenvolvi como projeto de estudo, utilizando as tecnologias Ionic, Angular e TypeScript',
        img: '../assets/projeto04.png',
        link: 'Link.com.br',
        nomeBotao: 'Demonstração',
        tags: ['Ionic', 'Angular', 'TypeScript']
      }
    ]
  }


}
