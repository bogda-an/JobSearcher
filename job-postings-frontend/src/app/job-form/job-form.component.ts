import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JobPostingService } from '../job-posting.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class JobFormComponent {
  job = {
    title: '',
    description: '',
    company: '',
    location: ''
  };

  constructor(private jobPostingService: JobPostingService, private router: Router) {}

  createJob(): void {
    this.jobPostingService.createJob(this.job).subscribe(
      (response: any) => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error(error);
        alert('Job creation failed');
      }
    );
  }
}
