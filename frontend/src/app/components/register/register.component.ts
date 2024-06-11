import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      err => {
        console.error(err);
      }
    );
  }
}
