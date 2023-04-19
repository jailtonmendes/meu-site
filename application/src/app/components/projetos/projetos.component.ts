import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {

  visible!: boolean;

  constructor(private router: Router) {

  }



    showDialog() {
        this.visible = true;
    }

  voltar() {
    this.router.navigate(['/']);
  }

}
