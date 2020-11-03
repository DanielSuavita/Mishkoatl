import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyServiceInterface } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  constructor( private HttpClient:HttpClient) { }

  public getServices(Path){
    return this.HttpClient.get<MyServiceInterface>(`/assets/static/${Path}.json`);
  }

}
