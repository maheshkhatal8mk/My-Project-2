import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SonyComponent } from './sony/sony.component';
import { CanonComponent } from './canon/canon.component';
import { NikonComponent } from './nikon/nikon.component';
import { SigmaComponent } from './sigma/sigma.component';
import { PanasonicComponent } from './panasonic/panasonic.component';



@NgModule({
  declarations: [
    SonyComponent,
    CanonComponent,
    NikonComponent,
    SigmaComponent,
    PanasonicComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CamerasModule { }
