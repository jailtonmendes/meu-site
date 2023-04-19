
import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu.component";
import { CommonModule } from "@angular/common";
import { SharedPrimeNgModule } from "src/app/shared/shared-primeNg/shared-primeNg.module";
import { MenuRoutingModule } from "./menu-routing.module";
import { MenuComponentComponent } from "./menu-component/menu-component.component";

@NgModule({
  declarations: [
    MenuComponent,
    MenuComponentComponent,
    MenuComponentComponent
  ],
  exports: [
    MenuComponent,
    MenuComponentComponent
  ],
  imports: [
    CommonModule,
    SharedPrimeNgModule,
    MenuRoutingModule,

  ]
})
export class MenuModule {}
