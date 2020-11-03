import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyServicesPageRoutingModule } from './my-services-routing.module';

import { MyServicesPage } from './my-services.page';
import { ComponentsModule } from '@components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyServicesPageRoutingModule,
    ComponentsModule,
    RouterModule
  ],
  declarations: [MyServicesPage]
})
export class MyServicesPageModule {}
