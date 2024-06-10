// src/app/components/home/home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Welcome to Our Job Portal';
  introduction = 'Find your dream job here. Browse job listings, apply online, and manage your profile.';
}
