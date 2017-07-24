import { Injectable } from '@angular/core';

import { Login } from './models/login';

@Injectable()
export class AuthService {
  private trueLogin: any = 'asdf@mail.ru';
  private truePassword: any = 'asdfghjkL1';

  constructor() { }

  checkLogin(login: Login) {
    if (login.userEmail === this.trueLogin && login.userPassword === this.truePassword) {
      return true;
    } else {
      return false;
    }
  }
}
