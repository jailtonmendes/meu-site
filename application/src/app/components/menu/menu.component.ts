import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  link = 'https://www.linkedin.com/in/jailton-mendes/'

  constructor(
    private router: Router
  ) {

  }

  projetos() {
    this.router.navigate(['/projetos']);
  }

  blog() {
    // alert('Estou trablhando nessa seção... logo logo estará pronta!')
    this.router.navigate(['/blog']);

  }

  teste() {
    console.log('testando...')
  }

  option: AnimationOptions = {
    path: 'assets/svg/dev.json',
  };

  irLink() {
    window.location.href = 'https://www.linkedin.com/in/jailton-mendes/'
  }

}
