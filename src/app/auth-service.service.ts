import { Injectable } from '@angular/core';

import { Login } from './models/login';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  private trueLogin: any = 'asdf@gmail.com';
  private truePassword: any = 'asdfghjkL1';

  checkLogin(login: Login): Observable<any> {
    return Observable.of(login.userEmail === this.trueLogin && login.userPassword === this.truePassword);
  }
}
