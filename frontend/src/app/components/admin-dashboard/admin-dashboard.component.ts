import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  jobs: any[] = [];
  newJob: any = {};
  selectedJob: any = {};
  showCreateJobForm = false;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  toggleCreateJobForm(): void {
    this.showCreateJobForm = !this.showCreateJobForm;
  }

  createJob(): void {
    this.jobService.createJob(this.newJob).subscribe(() => {
      this.loadJobs();
      this.newJob = {}; // Reset form
    });
  }

  editJob(job: any): void {
    this.selectedJob = { ...job };
  }

  updateJob(): void {
    this.jobService.updateJob(this.selectedJob._id, this.selectedJob).subscribe(() => {
      this.loadJobs();
      this.selectedJob = {}; // Reset form
    });
  }

  deleteJob(jobId: string): void {
    this.jobService.deleteJob(jobId).subscribe(() => {
      this.loadJobs();
    });
  }
}
