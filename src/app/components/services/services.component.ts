import { Component, Input, OnInit } from '@angular/core';
import { MyServiceInterface } from '../../utils/interfaces/service.interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {

  @Input("Services") Services:any;

  constructor(public toastController: ToastController) { }

  ngOnInit() {}

  async gotoWhatsApp(){
    const WHATSAPPMESSAGE = "Buen día, me gustaría solicitar tus servicios de artista plástico";
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
