import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { CommonModule } from "@angular/common";
import { SharedPrimeNgModule } from "src/app/shared/shared-primeNg/shared-primeNg.module";
import { BlogRoutingModule } from "./blog-routing.modules";

@NgModule({
  declarations: [BlogComponent],
  exports: [BlogComponent],
  imports: [
    CommonModule,
    SharedPrimeNgModule,
    BlogRoutingModule
  ]
})
export class BlogModule {}
