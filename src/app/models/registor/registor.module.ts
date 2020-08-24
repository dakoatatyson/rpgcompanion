import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistorPageRoutingModule } from './registor-routing.module';

import { RegistorPage } from './registor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistorPageRoutingModule
  ],
  declarations: [RegistorPage]
})
export class RegistorPageModule {}
