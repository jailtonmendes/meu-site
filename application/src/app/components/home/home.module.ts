import { SharedPrimeNgModule } from './../../shared/shared-primeNg/shared-primeNg.module';
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';
import { BodyModule } from '../body/body.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedPrimeNgModule,
    MenuModule,
    FooterModule,
    BodyModule
  ]
})
export class HomeModule {}




// Estrutura de Modulo

// import { NgModule } from "@angular/core";

// @NgModule({
//   declarations: [

//   ],
//   imports: [

//   ]
// })
// export class HomeModule {}
