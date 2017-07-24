import { Component } from '@angular/core';

import { Pay } from '../models/pay';

@Component({
  selector: 'app-pay-phone',
  templateUrl: './pay-phone.component.html',
  styleUrls: ['./pay-phone.component.css']
})
export class PayPhoneComponent {
  pay: Pay = {phone: '', price: '', userEmail: '', cardNumber: '', month: '', year: '', cvv: ''};

  constructor() {}


}
