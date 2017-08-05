import {Component, Inject, InjectionToken, OnInit} from '@angular/core';

import { Pay } from '../models/pay';
import {CONFIG} from '../app.config';

const AppConfig = new InjectionToken('app.config');

@Component({
  selector: 'app-pay-phone',
  templateUrl: './pay-phone.component.html',
  styleUrls: ['./pay-phone.component.css'],
  providers: [{provide: AppConfig, useValue: CONFIG }]
})
export class PayPhoneComponent implements OnInit {
  pay: Pay;
  msg: any;

  constructor (@Inject(AppConfig) config: any) {
    this.msg = config;
  }
  ngOnInit() {
    this.pay = new Pay();
  }
}
