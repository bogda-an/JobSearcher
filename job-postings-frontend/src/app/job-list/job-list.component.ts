import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostingService } from '../job-posting.service';
import { Job } from '../job.model'; // Import the Job model

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobPostings: Job[] = []; // Use Job[] instead of any[]

  constructor(private jobPostingService: JobPostingService) {}

  ngOnInit(): void {
    this.jobPostingService.getJobs().subscribe((data: Job[]) => {
      this.jobPostings = data;
    });
  }
}
