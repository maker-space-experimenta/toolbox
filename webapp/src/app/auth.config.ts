import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  oidc: true,
  issuer: 'https://login.toolbox.hmnd.de/auth/realms/toolbox',
  redirectUri: window.location.origin + "/dashboard",
  clientId: 'webapp-toolbox-dev',
  scope: 'openid profile email offline_access',
  requireHttps: false,
  responseType: 'code',
  disableAtHashCheck: true
}