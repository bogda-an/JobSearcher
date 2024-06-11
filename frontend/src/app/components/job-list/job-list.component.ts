import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      jobs => {
        this.jobs = jobs;
        console.log(this.jobs); // Add this line to debug
      },
      err => {
        console.error(err); // Add this line to catch errors
      }
    );
  }
}
