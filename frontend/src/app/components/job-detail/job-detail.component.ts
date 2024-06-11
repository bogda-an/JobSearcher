// src/app/components/job-detail/job-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  job: Job = {} as Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.jobService.getJob(jobId).subscribe((data) => {
        this.job = data;
      });
    }
  }

  applyForJob(): void {
    // Navigate to the Job Application component or handle the application logic here
    // Example:
    // this.router.navigate(['/apply', this.job?.id]);
  }

  saveJob(): void {
    // Logic to save the job, for example adding to a user's saved jobs list
    // Example:
    // this.userService.saveJob(this.job).subscribe(response => {
    //   console.log('Job saved', response);
    // });
  }
}
