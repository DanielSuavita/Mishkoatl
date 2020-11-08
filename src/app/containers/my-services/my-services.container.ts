import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-container',
  templateUrl: './my-services.container.html',
  styleUrls: ['./my-services.container.scss'],
})
export class MyServicesContainer implements OnInit {

  @Input("Services") Services:any = [];

  constructor() { }

  ngOnInit() {}

}
