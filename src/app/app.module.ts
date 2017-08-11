import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PayPhoneComponent } from './pay-phone/pay-phone.component';
import { AppRoutingModule } from './router';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PayPhoneComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
