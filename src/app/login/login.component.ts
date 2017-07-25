import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.login = new Login();
  }
  checkLogin(): void {
    this.isValid = this.authService.checkLogin(this.login);
    this.goToPay();
  }
  goToPay(): void {
    if (this.isValid) {
      this.router.navigate(['/pay']);
    }
  }
}
