import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostingService } from '../job-posting.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  job = { title: '', description: '' };
  id: string | null = null;

  constructor(
    private jobPostingService: JobPostingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.jobPostingService.getJobPosting(this.id).subscribe(data => {
        this.job = data;
      });
    }
  }

  save(): void {
    if (this.id) {
      this.jobPostingService.updateJobPosting(this.id, this.job).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.jobPostingService.createJobPosting(this.job).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
