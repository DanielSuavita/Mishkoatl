import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ProductComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ProductComponent,
    ServicesComponent
  ]
})
export class ComponentsModule { }
