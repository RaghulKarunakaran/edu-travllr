import { Component, Input, OnInit } from '@angular/core';
import { MyprofService } from '../myprof.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() currentOption: String = '';
  dashboardCourses: any = [];

  constructor(private myprofservice: MyprofService) {}

  ngOnInit(): void {
    this.dashboardCourses = this.myprofservice.courses;
  }
  getStatusColor(course: any) {
    if (course.status == 'Pending') {
      return '#DF9B16';
    } else if (course.status == 'In-Review') {
      return '#1672DF';
    } else if (course.status == 'Enrolled') {
      return '#16DF4E';
    }
    return null;
  }
}
