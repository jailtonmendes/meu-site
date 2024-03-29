import { Component, HostBinding, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProjetosModel } from 'src/app/shared/models/Projetos.model';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {

  visible!: boolean;
  titulo!: string;
  descricaoProjeto!: string;
  link!: string;
  idCard!: number;
  nomeBotao!: string;
  tags!: string[];
  listaProjetosHome = new Array<ProjetosModel>();

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


  abrirModal(projeto: ProjetosModel) {
    // console.log('projeto: ', projeto)
    this.visible = !this.visible;
    this.titulo = projeto.titulo
    this.descricaoProjeto = projeto.descricao
    this.nomeBotao = projeto.nomeBotao
    this.tags = projeto.tags
    this.link = projeto.link
  }

  // reactCloneSpotify.png

  listaProjetosPrincipais() {
    this.listaProjetosHome = [
      {
        id: 1,
        titulo: 'App GLPI',
        descricao: 'Desenvolvi este aplicativo utilizando a tecnologia Flutter, integrando de maneira eficaz com a API do GLPI. Este projeto se concentrou na simplificação do processo de abertura de chamados, trazendo praticidade e agilidade para os usuários. ',
        img: '../assets/glpi.png',
        link: 'https://github.com/jailtonmendes/flutter-app-glpi',
        nomeBotao: 'Ver código',
        tags: ['Flutter', 'Dart', 'LottieFiles']
      },
      {
        id: 1,
        titulo: 'App calular IMC',
        descricao: 'O objetivo do app é receber dois valores - peso e altura - e informar o Índice de Massa Corporal (IMC) correspondente. É uma ferramenta simples e útil para ajudar as pessoas a monitorarem seu peso e terem uma noção sobre seu estado de saúde em relação à sua massa corporal..',
        img: '../assets/imc.png',
        link: 'https://github.com/jailtonmendes/flutter-calculo-imc',
        nomeBotao: 'Ver código',
        tags: ['Flutter', 'Dart']
      },

      {
        id: 1,
        titulo: 'Previsão do tempo',
        descricao: 'Sistema dedenvolvido em Angular com a biblioteca PrimeNg, consumindo a API externa e exibindo informações do tempo.',
        img: '../assets/previsao_tempo.png',
        link: 'https://github.com/jailtonmendes/angular-weather-app',
        nomeBotao: 'Ver código',
        tags: ['Angular', 'PrimeNg', 'TypeScript']
      },
      {
        id: 1,
        titulo: 'Spotify Clone',
        descricao: 'Layout construido com React, NextJs e Tailwind.',
        img: '../assets/reactCloneSpotify.png',
        link: 'https://github.com/jailtonmendes/react-spotify-clone',
        nomeBotao: 'Ver código',
        tags: ['React', 'NextJs', 'Tailwind']
      },
      {
        id: 1,
        titulo: 'App tarefas',
        descricao: 'O projeto é uma lista de tarefas criada utilizando Ionic Angular e Typescript. Com esta aplicação, é possível registrar tarefas, marcar como concluídas, desmarcar e excluir. Os dados são salvos localmente na localstorage para garantir a persistência dos dados.',
        img: '../assets/appTarefasIonic.png',
        link: 'https://jailtonmendes.dev.br/files-portfolio/projetos/appTarefa/',
        nomeBotao: 'Demonstração',
        tags: ['Ionic', 'Angular', 'TypeScript', 'LocalStorage']
      },
      {
        id: 1,
        titulo: 'Tela de login',
        descricao: 'Este projeto é uma tela de login com animação de partículas, utilizando a biblioteca particle-js. As partículas se movimentam de forma fluida e aleatória, criando um efeito visual envolvente que torna o processo de autenticação mais atrativo e interativo para o usuário.',
        img: '../assets/particles.png',
        link: 'https://jailtonmendes.dev.br/files-portfolio/projetos/particles/',
        nomeBotao: 'Demonstração',
        tags: ['HTML', 'CSS', 'JavaScript', 'Particle-JS']
      },
      {
        id: 1,
        titulo: 'Landing page',
        descricao: 'Landpage baseada no jogo mario bros.',
        img: '../assets/marioBros.png',
        link: 'https://jailtonmendes.dev.br/files-portfolio/projetos/landpage-mario-bros/',
        nomeBotao: 'Demonstração',
        tags: ['HTML', 'CSS']
      },
      {
        id: 1,
        titulo: 'Layout Flex',
        descricao: 'Este projeto é um layout de um site desenvolvido com HTML e apresenta um design responsivo utilizando flex-box. O uso do flex-box permite que o layout se adapte automaticamente a diferentes tamanhos de tela, garantindo uma ótima experiência do usuário em dispositivos móveis e desktops. Com esta técnica, é possível criar um design atraente e organizado que se adapta perfeitamente a diferentes dispositivos, sem precisar escrever código específico para cada resolução de tela. O flex-box é uma ferramenta poderosa para a criação de layouts responsivos e modernos em sites e aplicações web.',
        img: '../assets/layoutFlex.png',
        link: 'https://jailtonmendes.dev.br/files-portfolio/projetos/layout-flex/',
        nomeBotao: 'Demonstração',
        tags: ['HTML', 'CSS']
      },
      {
        id: 1,
        titulo: 'Dev Finance',
        descricao: 'Este projeto é um aplicativo de controle financeiro chamado "Dev Finance", que permite ao usuário adicionar transações, sejam elas entradas ou saídas, para ter uma visão geral das finanças pessoais. O aplicativo exibe as informações de entrada, saída e o saldo total, mostrando se o resultado é positivo ou negativo. .',
        img: '../assets/devFinance.png',
        link: 'https://jailtonmendes.dev.br/files-portfolio/projetos/dev-finance/',
        nomeBotao: 'Demonstração',
        tags: ['HTML', 'CSS', 'JavaScript']
      },
      {
        id: 1,
        titulo: 'Pesquisa CEP',
        descricao: 'O projeto consiste em uma página que permite pesquisar um endereço a partir do CEP informado pelo usuário. Com a inserção do CEP, o aplicativo realiza uma consulta em tempo real e exibe o resultado na mesma página.',
        img: '../assets/pesquisarCep.png',
        link: 'https://jailtonmendes.dev.br/files-portfolio/projetos/pesquisandoCEP/',
        nomeBotao: 'Demonstração',
        tags: ['HTML', 'CSS', 'JavaScript']
      }
    ]
  }


  @HostListener('window:resize')
  onResize() {
    this.resizeSubject.next();
  }

  private updateModalWidth(width: number) {
    this.modalWidth = width < 768 ? '100vw' : '50vw';
  }

  showDialog() {
    this.visible = true;
  }

  onModalClose(fechouModal: boolean) {
    this.visible = false;
    // Realizar ação desejada após o fechamento do modal
  }

  voltar() {
    this.router.navigate(['/']);
  }


}
