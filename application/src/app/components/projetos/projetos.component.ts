import { Component, HostBinding, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {

  visible!: boolean;
  // innerWidth!: number;]
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
    // this.innerWidth = window.innerWidth;
    // this.innerWidth$.
    this.resize$.subscribe((width) => {
      console.log(width)
      this.updateModalWidth(width);
    });
  }

  // @HostListener('window:resizer', ['$event'])
  // onResizer(event: any) {
  //   this.innerWidth = window.innerWidth
  // }

  // @HostBinding('style.width')
  // get modalWidth() {
  //   let width = window.innerWidth < 768 ? '100vw' : '50vw'
  //   console.log(width)
  //   // return this.innerWidth < 768 ? '100vw' : '50vw';
  // }

  @HostListener('window:resize')
  onResize() {
    this.resizeSubject.next();
  }

  private updateModalWidth(width: number) {
    this.modalWidth = width < 768 ? '100vw' : '50vw';
  }



  showDialog() {
      this.visible = true;
      // console.log('width: ', this.modalWidth)
  }

  voltar() {
    this.router.navigate(['/']);
  }

}
