import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photoservice';
import { BlogPost } from './model/BlogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  cor = 'darkgray';
  color!: string;
  images!: any[];
  postagemSelecionada!: boolean;
  text: string | undefined;
  listaDePostagens: BlogPost[] = [];
  novaPostagem: BlogPost = {};
  postAtual: any;
  exibirCriandoPost: boolean = false;

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

constructor(private photoService: PhotoService) {
  this.postagemSelecionada = false;

  this.listaDePostagens = [
    {
      id: 1,
      image: 'Angular_ciclo_de_vida.png',
      titulo: 'Angular LifeCycle',
      subTitulo: 'Conheça os ciclos de vida do angular...',
      descricao: 'Descr',
      curtidas: 0
    },
    {
      id: 2,
      image: 'Angular_ciclo_de_vida.png',
      titulo: 'Flutter',
      subTitulo: 'Conheça os ciclos de vida do angular...',
      descricao: 'Descr',
      curtidas: 0
    },
    {
      id: 3,
      image: 'Angular_ciclo_de_vida.png',
      titulo: 'React Web',
      subTitulo: 'Conheça os ciclos de vida do angular...',
      descricao: 'Descrição do flutter 2222',
      curtidas: 0
    },
  ]

}

ngOnInit() {
  this.photoService.getImages().then((images) => (this.images = images));
}

trocarCorIcone() {
  this.cor = this.cor == 'darkgray' ? 'red' : 'darkgray'
}

novoPost() {
  this.exibirCriandoPost = !this.exibirCriandoPost;
}

 exibirPostage(post: BlogPost) {
  console.log(post)
  this.postAtual = post;
  this.postagemSelecionada = !this.postagemSelecionada;
 }

 voltarPostagem() {
   this.postagemSelecionada = !this.postagemSelecionada;
 }

 salvarPost() {
  console.log('NOVO POST: ', this.novaPostagem)
  this.listaDePostagens.push(this.novaPostagem);
  this.exibirCriandoPost = !this.exibirCriandoPost;
 }



}
