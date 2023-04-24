import { Component, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

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
  card1!: boolean;
  card2!: boolean;
  card3!: boolean;
  card4!: boolean;
  nomeBotao!: string;

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
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeSubject.next();
  }

  private updateModalWidth(width: number) {
    this.modalWidth = width < 768 ? '100vw' : '50vw';
  }

  projetos() {
    this.leiaMais = true;
    // this.router.navigate(['/projetos']);
  }

  abrirModal(id: number, titulo: string, descricao: string) {
    if(id == 1) {
      descricao = 'Este projeto é um website desenvolvido com HTML, CSS e JavaScript, com o objetivo de apresentar informações relevantes de maneira clara e acessível. A interface foi criada para oferecer uma experiência de usuário intuitiva, facilitando a navegação e a busca por informações.'
      this.visible = true;
      this.titulo = titulo;
      this.descricaoProjeto = descricao
      this.link = 'http://jailtonmendes.dev.br/files-portfolio/projetos/web-site-frutas/'
      this.card1 = true;
      this.card2 = false
      this.card3 = false
      this.card4 = false
      this.nomeBotao = 'Demonstração'
    }
    if(id == 2) {
      descricao = 'Este projeto é um layout desenvolvido utilizando HTML e SASS, com o objetivo de criar uma interface atraente e funcional. A linguagem SASS permite uma escrita mais organizada e modular do CSS, resultando em um código mais limpo e fácil de manter.'
      this.visible = true;
      this.titulo = titulo;
      this.descricaoProjeto = descricao
      this.link = 'http://jailtonmendes.dev.br/files-portfolio/projetos/agency/'
      this.card1 = false
      this.card2 = true
      this.card3 = false
      this.card4 = false
      this.nomeBotao = 'Demonstração'
    }

    if(id == 3) {
      descricao = "Este projeto foi desenvolvido durante o DartWeek, um evento realizado pela Academia do Flutter. Utilizamos a arquitetura MVC e o padrão Repository, juntamente com as tecnologias Provider e Bloc."
      this.visible = true;
      this.titulo = titulo;
      this.descricaoProjeto = descricao
      this.link = 'https://github.com/jailtonmendes/dart-week-vakinha-burguer'
      this.card1 = false
      this.card2 = false
      this.card3 = true
      this.card4 = false
      this.nomeBotao = 'Ver código'
    }

    // if(id == 3) {
    //   descricao = 'O projeto "Lista de Tarefas" foi desenvolvido utilizando as tecnologias Ionic, Angular e TypeScript. O objetivo principal do projeto é permitir que o usuário crie, gerencie e acompanhe suas tarefas diárias de forma simples e eficiente.'
    //   this.visible = true;
    //   this.titulo = titulo;
    //   this.descricaoProjeto = descricao
    //   this.link = 'http://jailtonmendes.dev.br/appTarefa'
    //   this.card1 = false
    //   this.card2 = false
    //   this.card3 = true
    //   this.card4 = false
    // }

    if(id == 4) {
      descricao = 'Este é um aplicativo de turismo que desenvolvi como projeto de estudo, utilizando as tecnologias Ionic, Angular e TypeScript'
      this.visible = true;
      this.titulo = titulo;
      this.descricaoProjeto = descricao
      this.link = 'https://jailtonmendes.dev.br/files-portfolio/projetos/app-turismo-ionic/'
      this.card1 = false
      this.card2 = false
      this.card3 = false
      this.card4 = true
      this.nomeBotao = 'Demonstração'
    }



  }

}
