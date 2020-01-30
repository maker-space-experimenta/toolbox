import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/classes/menu-item';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menu: MenuItem[] = [];

  currentTopMenu: MenuItem = null;

  selectedMenu: MenuItem = null;

  username: string = null;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private menuService: MenuService,
    private authService: AuthService) { }

  ngOnInit() {

    this.username = this.authService.username;

    this.menu = this.menuService.menu;
    this.menuService.menuObservable.subscribe(m => {
      this.menu;
      this.menu.forEach(m => {
        if (m.active) {
          this.selectedMenu = m;
        }
      })
    });


    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        // this.menuService.selectByPath(e.url);
      }
    })
  }

  menuClick(item: MenuItem) {

    if (item.children.length == 0) {
      this.menuService.navigate(item);
      return;
    }

    this.menuService.navigate(item);
    this.selectedMenu = item;
  }


  logout() {
    this.authService.logout();
  }

}
