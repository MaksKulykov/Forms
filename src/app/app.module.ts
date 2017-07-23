import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PayPhoneComponent } from './pay-phone/pay-phone.component';
import { AppRoutingModule } from './router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PayPhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
