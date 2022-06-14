import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppleComponent } from './apple/apple.component';
import { SamsungComponent } from './samsung/samsung.component';
import { XiomiComponent } from './xiomi/xiomi.component';
import { VivoComponent } from './vivo/vivo.component';
import { OneplusComponent } from './oneplus/oneplus.component';



@NgModule({
  declarations: [
    AppleComponent,
    SamsungComponent,
    XiomiComponent,
    VivoComponent,
    OneplusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MobilesModule { }
