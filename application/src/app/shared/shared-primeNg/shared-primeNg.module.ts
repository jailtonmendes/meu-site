import { NgModule } from "@angular/core";
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    SplitterModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    SplitterModule,
    CardModule,
    ButtonModule
  ]
})
export class SharedPrimeNgModule {}
