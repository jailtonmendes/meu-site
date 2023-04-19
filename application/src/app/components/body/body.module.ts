import { NgModule } from "@angular/core";
import { BodyComponent } from "./body.component";
import { SharedPrimeNgModule } from "src/app/shared/shared-primeNg/shared-primeNg.module";

@NgModule({
  declarations: [
    BodyComponent
  ],
  exports: [
    BodyComponent,
  ],
  imports: [
    SharedPrimeNgModule
  ]
})
export class BodyModule {}
