import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:3000/api/jobs';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getJob(jobId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${jobId}`);
  }

  createJob(jobData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, jobData);
  }

  updateJob(jobId: string, jobData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${jobId}`, jobData);
  }

  deleteJob(jobId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${jobId}`);
  }

  applyForJob(jobId: string, applicationData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${jobId}/apply`, applicationData);
  }

  getSavedJobs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/saved`);
  }
}
