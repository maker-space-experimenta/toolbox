import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const authConfig: AuthConfig = {
  oidc: true,
  issuer: 'https://login.toolbox.hmnd.de/auth/realms/toolbox',
  redirectUri: window.location.origin + "/dashboard",
  clientId: environment.clientId,
  scope: 'openid profile email offline_access roles',
  requireHttps: false,
  responseType: 'code',
  disableAtHashCheck: true
}