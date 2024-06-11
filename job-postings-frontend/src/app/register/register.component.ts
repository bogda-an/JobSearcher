import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    this.authService.register(this.user).subscribe(response => {
      this.router.navigate(['/login']);
    }, error => {
      console.error(error);
    });
  }
}
