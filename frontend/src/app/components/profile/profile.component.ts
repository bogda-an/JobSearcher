import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  savedJobs: any[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getSavedJobs().subscribe((data: any) => {
      this.savedJobs = data;
    });
  }
}
