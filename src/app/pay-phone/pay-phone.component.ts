import {Component, Inject, InjectionToken} from '@angular/core';

import { Pay } from '../models/pay';
import {CONFIG} from '../app.config';

const AppConfig = new InjectionToken('app.config');

@Component({
  selector: 'app-pay-phone',
  templateUrl: './pay-phone.component.html',
  styleUrls: ['./pay-phone.component.css'],
  providers: [{provide: AppConfig, useValue: CONFIG }]
})
export class PayPhoneComponent {
  pay: Pay = {phone: '', price: '', userEmail: '', cardNumber: '', month: '', year: '', cvv: ''};
  msg: any;

  constructor (@Inject(AppConfig) config: any) {
    this.msg = config;
  }


}
