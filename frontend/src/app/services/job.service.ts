import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://localhost:3000/api/jobs'; // Adjust the base URL as necessary

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createJob(job: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, job);
  }

  updateJob(jobId: string, job: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${jobId}`, job);
  }

  deleteJob(jobId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${jobId}`);
  }

  applyForJob(applicationData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/apply`, applicationData);
  }
}
