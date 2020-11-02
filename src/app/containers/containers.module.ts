import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContainer } from './product/product.container';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ProductContainer
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule
  ],
  exports:[
    ProductContainer
  ]
})
export class ContainersModule { }
