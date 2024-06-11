import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostingService } from '../job-posting.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobPostings: any[] = [];

  constructor(private jobPostingService: JobPostingService) {}

  ngOnInit(): void {
    this.jobPostingService.getJobPostings().subscribe(data => {
      this.jobPostings = data;
    });
  }
}
