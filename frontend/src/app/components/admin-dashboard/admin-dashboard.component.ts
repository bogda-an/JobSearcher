// src/app/components/admin-dashboard/admin-dashboard.component.ts
import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  jobs: Job[] = [];
  newJob: Job = {} as Job;
  selectedJob: Job | null = null;
  showCreateJobForm: boolean = false;

  constructor(private jobService: JobService) {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe((data) => {
      this.jobs = data;
    });
  }

  toggleCreateJobForm(): void {
    this.showCreateJobForm = !this.showCreateJobForm;
    this.newJob = {} as Job; // Reset the form
  }

  createJob(): void {
    this.jobService.createJob(this.newJob).subscribe(() => {
      this.loadJobs(); // Reload the job list
      this.toggleCreateJobForm(); // Hide the form
    });
  }

  editJob(job: Job): void {
    this.selectedJob = { ...job }; // Make a copy of the job to edit
  }

  updateJob(): void {
    if (this.selectedJob) {
      this.jobService.updateJob(this.selectedJob._id!, this.selectedJob).subscribe(() => {
        this.loadJobs(); // Reload the job list
        this.selectedJob = null; // Deselect the job
      });
    }
  }

  deleteJob(id: string): void {
    if (id) {
      this.jobService.deleteJob(id).subscribe(() => {
        this.loadJobs(); // Reload the job list
      });
    }
  }
}
