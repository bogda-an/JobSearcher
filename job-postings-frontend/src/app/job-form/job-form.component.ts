import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JobPostingService } from '../job-posting.service';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class JobFormComponent {
  job: Job = {
    title: '',
    company: '',
    location: '',
    date_posted: new Date(),
    employment_type: '',
    job_description: '',
    job_requirements: '',
    salary: '',
    industry: '',
    experience_level: '',
    job_link: ''
  };

  constructor(
    private jobPostingService: JobPostingService,
    private router: Router
  ) { }

  createJob(): void {
    this.jobPostingService.createJob(this.job).subscribe(
      (response) => {
        this.router.navigate(['/jobs']);
      },
      (error: any) => {
        console.error(error);
        alert('Job creation failed');
      }
    );
  }
}
