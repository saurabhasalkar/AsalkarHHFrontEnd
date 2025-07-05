import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
loginEmail = '';
  loginPassword = '';
  loginMessage = '';

  registerName = '';
  registerEmail = '';
  registerPassword = '';
  registerMessage = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.loginEmail, this.loginPassword).subscribe(res => {
      this.loginMessage = res;
    });
  }

  register() {
    const user = {
      name: this.registerName,
      email: this.registerEmail,
      password: this.registerPassword
    };
    this.authService.register(user).subscribe((res:any) => {
      this.registerMessage = res;
    });
  }
}
