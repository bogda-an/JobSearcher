import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from './auth.service';
import { JobPostingService } from './job-posting.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, JobPostingService, AuthGuard]
})
export class AppModule { }
