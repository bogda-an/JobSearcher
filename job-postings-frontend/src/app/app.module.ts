import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobFormComponent } from './job-form/job-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { routes } from './app.routes';
import { AuthService } from './auth.service';
import { JobPostingService } from './job-posting.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    JobListComponent,
    JobDetailComponent,
    JobFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, JobPostingService, AuthGuard]
})
export class AppModule { }
