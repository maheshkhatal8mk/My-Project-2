import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HpComponent } from './hp/hp.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { DellComponent } from './dell/dell.component';
import { AsusComponent } from './asus/asus.component';
import { AcerComponent } from './acer/acer.component';
import { AppleComponent } from './apple/apple.component';



@NgModule({
  declarations: [
    HpComponent,
    LenovoComponent,
    DellComponent,
    AsusComponent,
    AcerComponent,
    AppleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LaptopModule { }
