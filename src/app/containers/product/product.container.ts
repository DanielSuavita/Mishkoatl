import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-product',
  templateUrl: './product.container.html',
  styleUrls: ['./product.container.scss'],
})
export class ProductContainer implements OnInit {

  @Input("Products") Products:any = [];

  constructor() { }

  ngOnInit() {}

}
