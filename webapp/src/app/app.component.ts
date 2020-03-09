import { Component, OnInit } from '@angular/core';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { User } from './classes/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'toolbox';
  isLoggedIn = false;
  hideSplashScreen = false;
  status = "logging in ...";


  constructor(private authService: AuthService) {
    this.authService.IsLoggedIn.subscribe(m => {
      this.isLoggedIn = m;

      if (this.isLoggedIn) {
        window.setTimeout(() => {this.hideSplashScreen = true; }, 400);
      }
    });
    this.authService.ConfigureImplicitFlowAuthentication();
  }

  ngOnInit(): void {
    
  }

}