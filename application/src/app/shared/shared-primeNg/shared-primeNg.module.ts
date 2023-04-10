import { NgModule } from "@angular/core";
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    SplitterModule,
    CardModule
  ],
  exports: [
    SplitterModule,
    CardModule
  ]
})
export class SharedPrimeNgModule {}
