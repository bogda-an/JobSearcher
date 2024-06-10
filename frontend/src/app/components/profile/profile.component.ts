// src/app/components/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  savedJobs: any[] = [];

  constructor(
    private authService: AuthService,
    private jobService: JobService,
    private router: Router  // Inject Router here
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
    this.loadSavedJobs();
  }

  loadUserProfile(): void {
    this.authService.getUserProfile().subscribe((data) => {
      this.user = data;
    });
  }

  loadSavedJobs(): void {
    // Example logic to load saved jobs
    this.jobService.getSavedJobs().subscribe((data) => {
      this.savedJobs = data;
    });
  }

  editProfile(): void {
    // Navigate to profile editing form or toggle editing mode
    this.router.navigate(['/edit-profile']);
  }
}
