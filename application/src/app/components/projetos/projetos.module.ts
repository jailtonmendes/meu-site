import { NgModule } from "@angular/core";
import { ProjetosComponent } from "./projetos.component";
import { CommonModule } from "@angular/common";
import { SharedPrimeNgModule } from "src/app/shared/shared-primeNg/shared-primeNg.module";
import { ProjetosRoutingModule } from "./projetos-routing.module";
import { MenuModule } from "../menu/menu.module";

@NgModule({
  declarations: [
    ProjetosComponent
  ],
  exports: [
    ProjetosComponent
  ],
  imports: [
    CommonModule,
    SharedPrimeNgModule,
    ProjetosRoutingModule,
    MenuModule,
  ]
})
export class ProjetosModule {}
