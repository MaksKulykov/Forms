import { Component } from '@angular/core';

import { Pay } from '../models/pay';

@Component({
  selector: 'app-pay-phone',
  templateUrl: './pay-phone.component.html',
  styleUrls: ['./pay-phone.component.css']
})
export class PayPhoneComponent {
  pay: Pay = new Pay();

}
