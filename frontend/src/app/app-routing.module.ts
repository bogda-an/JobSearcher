import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobCreateComponent } from './components/job-create/job-create.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'create-job', component: JobCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Ensure RouterModule is imported with routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
