import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContainer } from './product/product.container';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { MyServicesContainer } from './my-services/my-services.container';


@NgModule({
  declarations: [
    ProductContainer,
    MyServicesContainer
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule
  ],
  exports:[
    ProductContainer,
    MyServicesContainer
  ]
})
export class ContainersModule { }
