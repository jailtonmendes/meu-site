
import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu.component";
import { CommonModule } from "@angular/common";
import { SharedPrimeNgModule } from "src/app/shared/shared-primeNg/shared-primeNg.module";
import { MenuRoutingModule } from "./menu-routing.module";

@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedPrimeNgModule,
    MenuRoutingModule
  ]
})
export class MenuModule {}
