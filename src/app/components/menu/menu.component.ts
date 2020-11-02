import { Component, OnInit } from '@angular/core';
import { MenuService } from '@utils/services/menu.service';
import { MenuInterface } from '@utils/interfaces/menu.interface';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  Menu:MenuInterface;

  constructor(private MenuService:MenuService) { }

  ngOnInit() {
    this.loadMenu();
  }

  public loadMenu(){
    this.MenuService.getMenu().subscribe(Menu => this.Menu = Menu);
  }

}
