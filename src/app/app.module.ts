import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule, MatCardModule, MatButtonModule,
  MatSidenavModule, MatIconModule, MatListModule, MatSidenav } from '@angular/material';

import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    CoreModule,
    HomeModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    LayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
