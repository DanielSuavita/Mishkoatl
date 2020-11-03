import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input("Product") Product:any = [];

  constructor(public toastController: ToastController) { }

  ngOnInit() { }
  
  async gotoWhatsApp(){
    const WHATSAPPMESSAGE = "Buen día, me interesa obtener un(a) producto";
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
