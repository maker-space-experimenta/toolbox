import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  rememberMe: boolean;

  constructor(
    private _router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    // if (f.valid && this.authService.login(this.username, this.password)) {
    //   console.log("login successfull");
    // }
  }

}
