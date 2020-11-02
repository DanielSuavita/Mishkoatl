import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@utils/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  Path:string;
  Products:any = [];

  constructor(private ActivatedRoute:ActivatedRoute, private ProductService:ProductService) { }

  ngOnInit() {
    this.getPath();
    this.getProducts();
  }

  private getPath(){
    this.ActivatedRoute.params.subscribe(({product})=> {
      this.Path = product;
    });
  }

  public getProducts(){
    this.ProductService.getProducts(this.Path.toLocaleLowerCase()).subscribe(Products=>{
      this.Products = Products;
    });
  }

}
