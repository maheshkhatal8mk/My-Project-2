import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamsungComponent } from './samsung/samsung.component';
import { LgComponent } from './lg/lg.component';
import { MiComponent } from './mi/mi.component';
import { OnidaComponent } from './onida/onida.component';
import { VideoconComponent } from './videocon/videocon.component';
import { SonyComponent } from './sony/sony.component';



@NgModule({
  declarations: [
    SamsungComponent,
    LgComponent,
    MiComponent,
    OnidaComponent,
    VideoconComponent,
    SonyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TelevisionModule { }
