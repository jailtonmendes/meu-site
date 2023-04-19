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

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [],
  imports: [
    SplitterModule,
    CardModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    LottieModule.forRoot({ player: playerFactory }),
    ChipModule,
    CommonModule



  ],
  exports: [
    SplitterModule,
    CardModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    LottieModule,
    ChipModule,
    CommonModule

  ]
})
export class SharedPrimeNgModule {}
