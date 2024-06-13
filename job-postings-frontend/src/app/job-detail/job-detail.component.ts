import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostingService } from '../job-posting.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: any = {};
  id: string | null = null;

  constructor(
    private jobPostingService: JobPostingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.jobPostingService.getJobPosting(this.id).subscribe((data: any) => {
        this.job = data;
      });
    }
  }

  delete(): void {
    if (this.id) {
      this.jobPostingService.deleteJobPosting(this.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
