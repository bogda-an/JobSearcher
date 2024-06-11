import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobApplicationComponent } from './job-application.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JobApplicationComponent', () => {
  let component: JobApplicationComponent;
  let fixture: ComponentFixture<JobApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobApplicationComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { paramMap: of({ get: () => '123' }) } 
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
