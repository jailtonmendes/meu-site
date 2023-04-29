import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent {

  constructor(private router: Router) {

  }


  projetos() {
    this.router.navigate(['/projetos']);
    console.log('projetos...')
  }

  blog() {
    this.router.navigate(['/blog']);
    console.log('projetos...')
  }

  contato() {
    
  }
}
