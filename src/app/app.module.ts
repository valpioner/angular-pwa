import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatCardModule, MatButtonModule,
  MatSidenavModule, MatIconModule, MatListModule, MatSidenav } from '@angular/material';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { ImgCardComponent } from './img-card/img-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { AppFooterComponent } from './app-footer/app-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent,
    AppNavComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
