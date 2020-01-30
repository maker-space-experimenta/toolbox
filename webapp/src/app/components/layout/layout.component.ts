import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscribeNavigationEnd();
  }

  subscribeNavigationEnd() {
    this.router
      .events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.route.data.subscribe(data => console.log("navend data:", data));
      })
  }

  ngOnInit() {




  }

}
