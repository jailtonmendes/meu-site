import { NgModule } from "@angular/core";
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from "@angular/common";
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from "@angular/forms";
import { ModalComponent } from "../modal/modal.component";
import { GalleriaModule } from 'primeng/galleria';


export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    FormsModule,
    SplitterModule,
    CardModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    LottieModule.forRoot({ player: playerFactory }),
    ChipModule,
    CommonModule,
    ChipsModule,
    GalleriaModule,


  ],
  exports: [
    FormsModule,
    SplitterModule,
    CardModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    LottieModule,
    ChipModule,
    CommonModule,
    ChipsModule,
    ModalComponent,
    GalleriaModule,

  ]
})
export class SharedPrimeNgModule {}
