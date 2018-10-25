import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from "angular-6-social-login";
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FbloginComponent } from './fblogin/fblogin.component';
import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from './app-routing.module';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2146162629036392")
        }
      ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FbloginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    SocialLoginModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    OrderModule
  ],
  providers: [{
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
