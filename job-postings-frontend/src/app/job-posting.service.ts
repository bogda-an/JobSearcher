import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {
  private apiUrl = 'http://localhost:5000/api/jobs';  

  constructor(private http: HttpClient) { }

  getJobPostings(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getJobPosting(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createJobPosting(job: any): Observable<any> {
    return this.http.post(this.apiUrl, job);
  }

  updateJobPosting(id: string, job: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, job);
  }

  deleteJobPosting(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
