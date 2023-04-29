import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photoservice';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  cor = 'darkgray';
  color!: string;
  images!: any[];

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

}

ngOnInit() {
  this.photoService.getImages().then((images) => (this.images = images));
}


  trocarCorIcone() {
    this.cor = this.cor == 'darkgray' ? 'red' : 'darkgray'
  }
}
