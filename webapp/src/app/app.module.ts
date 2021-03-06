import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { AppAlertComponent } from './components/app-alert/app-alert.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolboxSignageModule } from './plugins/toolbox-signage/toolbox-signage.module';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevicesModule } from './modules/devices/devices.module';
import { CommonComponentsModule } from './modules/common-components/common-components.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { I18nModule } from './i18n/i18n.module';
import { HttpAuthInterceptorService } from './services/http-auth-interceptor.service';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AppAlertComponent,
    NavigationComponent,
    DashboardComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    I18nModule,

    OAuthModule.forRoot(),

    CommonComponentsModule,
    DevicesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
