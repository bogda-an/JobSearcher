import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobDetailComponent } from './job-detail.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JobDetailComponent', () => {
  let component: JobDetailComponent;
  let fixture: ComponentFixture<JobDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobDetailComponent],
      imports: [CommonModule, HttpClientTestingModule],
      providers: [
        DatePipe,
        CurrencyPipe,
        { 
          provide: ActivatedRoute, 
          useValue: { paramMap: of({ get: () => '123' }) } 
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
