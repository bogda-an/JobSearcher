import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent implements OnInit {
  applicationForm: FormGroup;
  jobId: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private jobService: JobService
  ) {
    this.applicationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      resume: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id') || '';
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.applicationForm.patchValue({
        resume: file
      });
    }
  }

  submitApplication(): void {
    if (this.applicationForm.valid) {
      const applicationData = new FormData();
      applicationData.append('name', this.applicationForm.get('name')?.value);
      applicationData.append('email', this.applicationForm.get('email')?.value);
      applicationData.append('resume', this.applicationForm.get('resume')?.value);

      this.jobService.applyForJob(this.jobId, applicationData).subscribe((response: any) => {
        // Handle response
      });
    }
  }
}
