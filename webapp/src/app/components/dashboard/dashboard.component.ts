import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { UsersService } from 'src/app/repositories/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: any;

  constructor(
    private menuservice: MenuService,
    private authService: AuthService,
    private userService: UsersService,
    private http: HttpClient,
    private oauthService: OAuthService
  ) {
    this.user = this.userService.getUser(this.authService.username);
  }

  ngOnInit() {

    let ac = this.oauthService.getAccessToken();
    console.log(ac);

    let ic = this.oauthService.getIdentityClaims();
    console.log(ic['preferred_username']);
    

    this.http.get("http://localhost:5000/me").subscribe(result => {
      console.log(result);
      this.user = result;
    }, error => console.error(error));
  }

}
