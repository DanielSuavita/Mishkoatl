import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuInterface } from '@interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private HttpClient:HttpClient) { }

  public getMenu(){
    return this.HttpClient.get<MenuInterface>('/assets/static/menu.json');
  }

}
