import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { MychatComponent } from './components/mychat/mychat.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    MychatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
