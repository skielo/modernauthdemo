import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationGuard, MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { getAdalConfig } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpSecurityInterceptor } from './http-security.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot(getAdalConfig),
    HttpClientModule
  ],
  providers: [
    AuthenticationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpSecurityInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
