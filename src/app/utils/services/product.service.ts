import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '@utils/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private HttpClient:HttpClient) { }

  public getProducts(Path){
    return this.HttpClient.get<ProductInterface>(`/assets/static/${Path}.json`);
  }

}
