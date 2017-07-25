import { Injectable } from '@angular/core';

import { Login } from './models/login';

@Injectable()
export class AuthService {
  private trueLogin: any = 'asdf@gmail.com';
  private truePassword: any = 'asdfghjkL1';

  checkLogin(login: Login): boolean {
    return (login.userEmail === this.trueLogin && login.userPassword === this.truePassword) ? true : false;
  }
}
