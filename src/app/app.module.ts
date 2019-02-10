import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {RequestCache, RequestCacheWithMap} from './request-cache.service';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {AppComponent} from './app.component';
import {AuthService} from './auth.service';
import {ConfigComponent} from './config/config.component';
import {DownloaderComponent} from './downloader/downloader.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';
import {MessagesComponent} from './messages/messages.component';
import {PackageSearchComponent} from './package-search/package-search.component';
import {UploaderComponent} from './uploader/uploader.component';

import {httpInterceptorProviders} from './http-interceptors';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}),
  ],
  declarations: [
    AppComponent,
    ConfigComponent,
    DownloaderComponent,
    HeroesComponent,
    MessagesComponent,
    UploaderComponent,
    PackageSearchComponent,
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
