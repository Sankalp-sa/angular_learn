import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { ContainerComponent } from './container/container.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    {provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
