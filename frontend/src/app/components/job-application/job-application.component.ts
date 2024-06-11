import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent implements OnInit {
  applicationForm: FormGroup;
  jobId!: string;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private route: ActivatedRoute
  ) {
    this.applicationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      resume: [null, Validators.required],
      additionalDetails: ['']
    });
  }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id')!;
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
      const formData = new FormData();
      formData.append('name', this.applicationForm.get('name')!.value);
      formData.append('email', this.applicationForm.get('email')!.value);
      formData.append('resume', this.applicationForm.get('resume')!.value);
      formData.append('additionalDetails', this.applicationForm.get('additionalDetails')!.value);
      formData.append('jobId', this.jobId);

      this.jobService.applyForJob(formData).subscribe((response: any) => {
        console.log('Application submitted', response);
      });
    }
  }
}
