import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ProductInterface } from '@utils/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input("Product") Product:ProductInterface;

  constructor(public toastController: ToastController) { }

  ngOnInit() { }
  
  async gotoWhatsApp(){
    const WHATSAPPMESSAGE = `Buen día, me interesa obtener el producto ${this.Product.name}, cuyo precio es ${this.Product.price} pesos mexicanos.`;
    const toast = await this.toastController.create({
      position: 'middle',
      message: 'Será redireccionado a WhatsApp.',
      duration: 2000
    });
    toast.present();
    setTimeout(() => {
      window.open(`https://wa.me/5214613532012?text=${WHATSAPPMESSAGE}`);

    }, 2000);
  }

}
