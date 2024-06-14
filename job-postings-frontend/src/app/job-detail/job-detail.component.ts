import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostingService } from '../job-posting.service';
import { Job } from '../job.model'; // Import the Job model

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: Job | undefined;
  id: string;

  constructor(
    private jobPostingService: JobPostingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }

  ngOnInit(): void {
    this.getJobDetail();
  }

  getJobDetail(): void {
    this.jobPostingService.getJobPosting(this.id).subscribe((data: Job) => {
      this.job = data;
    });
  }

  deleteJob(): void {
    this.jobPostingService.deleteJobPosting(this.id).subscribe(() => {
      this.router.navigate(['/jobs']);
    });
  }
}
