import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {
  private apiUrl = 'http://localhost:5000/api/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl, this.getHeaders());
  }

  getJobPosting(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  createJob(job: Job): Observable<any> {
    return this.http.post(this.apiUrl, job, this.getHeaders());
  }

  updateJob(id: string, job: Job): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, job, this.getHeaders());
  }

  deleteJobPosting(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  private getHeaders() {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    const headers = new HttpHeaders().set('x-auth-token', token || '');
    return { headers };
  }
}
