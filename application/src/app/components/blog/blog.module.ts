import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { CommonModule } from "@angular/common";
import { SharedPrimeNgModule } from "src/app/shared/shared-primeNg/shared-primeNg.module";
import { BlogRoutingModule } from "./blog-routing.modules";
import { MenuModule } from "../menu/menu.module";
import { FormsModule } from "@angular/forms";
import { PhotoService } from "src/app/services/photoservice";

@NgModule({
  declarations: [BlogComponent],
  exports: [BlogComponent],
  providers: [PhotoService],
  imports: [
    CommonModule,
    SharedPrimeNgModule,
    BlogRoutingModule,
    MenuModule,
    FormsModule
  ]
})
export class BlogModule {}
