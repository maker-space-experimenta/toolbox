import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { OAuthService, NullValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './../auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  public user: any = null;

  public IsLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private oauthService: OAuthService) {
  }



  public ConfigureImplicitFlowAuthentication() {

    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    // this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .then(() => {

        if (!this.oauthService.hasValidAccessToken()) {
          console.log("has access no token");
          this.oauthService.initCodeFlow()
        } else {
          console.log("has access token");
          this.IsLoggedIn.next(true);
        }

      });
  }

  logout() {
    this.oauthService.logOut();
  }


  get username() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) {
      console.log("no claims available");
      return null;
    }

    return claims.preferred_username;
  }


}
