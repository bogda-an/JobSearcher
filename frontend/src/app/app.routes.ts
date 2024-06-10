// src/app/app.routes.ts (if necessary)
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailComponent },
  { path: 'apply/:id', component: JobApplicationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
