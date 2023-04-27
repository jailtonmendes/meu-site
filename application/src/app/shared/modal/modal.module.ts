import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal.component";
import { SharedPrimeNgModule } from "../shared-primeNg/shared-primeNg.module";

@NgModule({
    declarations: [
        ModalComponent
    ],
    exports: [
        ModalComponent
    ],
    imports: [
        SharedPrimeNgModule,
    ]
})
export class ModalModule {}