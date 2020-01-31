import { Injectable } from '@angular/core';
import { MenuItem } from '../classes/menu-item';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: MenuItem[] = [];
  menuObservable: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>(null);

  constructor(
    private router: Router
  ) {
    this.menu = environment.menu.default.map((m: any) => {
      return this._parseMenuItem(m);
    });
  }

  private _parseMenuItem(menuItem: any): MenuItem {
    var children: MenuItem[] = [];
    if (menuItem.children) {
      menuItem.children.forEach(m => {
        children.push(this._parseMenuItem(m));
      });
    }

    return {
      i18n_key: menuItem.i18n_key,
      path: menuItem.path,
      id: menuItem.id ? menuItem.id : menuItem.i18n_key.toLowerCase(),
      active: menuItem.active ? menuItem.active : false,
      order: menuItem.order ? menuItem.order : 0,
      children: children
    };
  }

  private _activateMenuItem(activate: MenuItem, item: MenuItem): boolean {
    var activated = false;
    
    if (activate.id == item.id) {
      item.active = true;
      if (item.children.length > 0) {
        item.children[0].active = true;
      }
      return true;
    }

    item.children.forEach(m => {
      if (this._activateMenuItem(activate, m)) {
        activated = true;
        item.active = true;
      }
    });

    if (!activated)
      item.active = false;

    return activated;
  }

  register(item: MenuItem) {

    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].path == item.path) {
        return;
      }
    }

    console.log(item);

    this.menu.push(item);
    this.menuObservable.next(this.menu);

    console.log("menu registered", this.menu);
  }

  navigate(item: MenuItem) {
    console.log("run navigate");
    this.menu.forEach(m => this._activateMenuItem(item, m));
    this.menuObservable.next(this.menu);
    this.router.navigateByUrl(item.path);
  }
}
