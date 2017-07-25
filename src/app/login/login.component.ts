import { Component, OnInit } from '@angular/core';

import { Login } from '../models/login';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;
  isValid: boolean;
  routerLink;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.login = {userEmail: '', userPassword: ''};
  }
  checkLogin(): void {
    this.isValid = this.authService.checkLogin(this.login);
    this.changeRouterLink();
  }
  changeRouterLink(): void {
    this.isValid === true ? this.routerLink = '/pay' : this.routerLink = '/login';
  }
}
