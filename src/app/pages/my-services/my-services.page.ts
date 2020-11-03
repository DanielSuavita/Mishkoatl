import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServicesService } from '@utils/services/my-services.service';
import { MyServiceInterface } from '../../utils/interfaces/service.interface';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.page.html',
  styleUrls: ['./my-services.page.scss'],
})
export class MyServicesPage implements OnInit {

  Path:string;
  Services:any = null;

  constructor(private ActivatedRoute:ActivatedRoute, private ServiceService:MyServicesService) { }

  ngOnInit() {
    this.getPath();
    this.getServices();
  }

  private getPath(){
    this.ActivatedRoute.params.subscribe(({service})=> {
      this.Path = service;
    });
  }

  public getServices(){
    this.ServiceService.getServices(this.Path.toLocaleLowerCase()).subscribe(({service})=>{
      this.Services = service[0];
    });
  }

}
