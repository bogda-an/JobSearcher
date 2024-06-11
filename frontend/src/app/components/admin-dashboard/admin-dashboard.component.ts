import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  jobs: any[] = [];
  selectedJob: any = null;
  newJob: any = {};
  showCreateJobForm: boolean = false;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe((data: any[]) => {
      this.jobs = data;
    });
  }

  toggleCreateJobForm(): void {
    this.showCreateJobForm = !this.showCreateJobForm;
  }

  createJob(): void {
    this.jobService.createJob(this.newJob).subscribe(() => {
      this.loadJobs();
      this.newJob = {};
      this.showCreateJobForm = false;
    });
  }

  editJob(job: any): void {
    this.selectedJob = { ...job };
  }

  updateJob(): void {
    if (this.selectedJob && this.selectedJob._id) {
      this.jobService.updateJob(this.selectedJob._id, this.selectedJob).subscribe(() => {
        this.loadJobs();
        this.selectedJob = null;
      });
    }
  }

  deleteJob(jobId: string): void {
    this.jobService.deleteJob(jobId).subscribe(() => {
      this.loadJobs();
    });
  }
}
