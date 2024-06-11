import { Component, OnInit } from '@angular/core';
import { JobPostingService } from '../job-posting.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobPostings: any[] = [];

  constructor(private jobPostingService: JobPostingService) { }

  ngOnInit(): void {
    this.jobPostingService.getJobPostings().subscribe(data => {
      this.jobPostings = data;
    });
  }
}
