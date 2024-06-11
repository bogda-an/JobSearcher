import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobCreateComponent } from './job-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';

describe('JobCreateComponent', () => {
  let component: JobCreateComponent;
  let fixture: ComponentFixture<JobCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobCreateComponent],
      imports: [FormsModule, HttpClientTestingModule, CommonModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
