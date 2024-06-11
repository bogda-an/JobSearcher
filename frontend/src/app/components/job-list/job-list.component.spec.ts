import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobListComponent } from './job-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';

describe('JobListComponent', () => {
  let component: JobListComponent;
  let fixture: ComponentFixture<JobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobListComponent],
      imports: [HttpClientTestingModule, CommonModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
