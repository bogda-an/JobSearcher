import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.user).subscribe(
      (response: any) => {
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error(error);
        alert('Registration failed');
      }
    );
  }
}
