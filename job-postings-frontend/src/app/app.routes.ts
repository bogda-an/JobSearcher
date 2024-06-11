import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobFormComponent } from './job-form/job-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'job/:id', component: JobDetailComponent },
  { path: 'create-job', component: JobFormComponent, canActivate: [AuthGuard] },
  { path: 'edit-job/:id', component: JobFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
