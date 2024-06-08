import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  loginEmail: string = '';
  loginPassword: string = '';
  registerName: string = '';
  registerEmail: string = '';
  registerPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ email: this.loginEmail, password: this.loginPassword }).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profile']);
      },
      err => {
        console.error(err);
      }
    );
  }

  register() {
    this.authService.register({ name: this.registerName, email: this.registerEmail, password: this.registerPassword }).subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      err => {
        console.error(err);
      }
    );
  }
}
