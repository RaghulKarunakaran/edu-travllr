import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyprofService {
  courses = [
    {
      id: 1,
      courseName: 'Complete Web & Mobile Designer in 2022',
      university: 'IIT',
      date: '22th june 22',
      status: 'Pending',
      Actions: '/assets/images/app_det_myprof/dashboard/three_dots.svg',
    },
    {
      id: 2,
      courseName: 'User Experience Design Essentials - Adobe XD',
      university: 'VIT',
      date: '22th june 22',
      status: 'In-Review',
      Actions: '/assets/images/app_det_myprof/dashboard/three_dots.svg',
    },
    {
      id: 3,
      courseName: 'Complete java development in 2022',
      university: 'VIT',
      date: '22th june 22',
      status: 'Enrolled',
      Actions: '/assets/images/app_det_myprof/dashboard/three_dots.svg',
    },
    {
      id: 4,
      courseName: 'User Experience Design Essentials - Adobe XD',
      university: 'VIT',
      date: '22th june 22',
      status: 'In-Review',
      Actions: '/assets/images/app_det_myprof/dashboard/three_dots.svg',
    },
    {
      id: 5,
      courseName: 'Complete Web & Mobile Designer in 2022',
      university: 'IIT',
      date: '22th june 22',
      status: 'Pending',
      Actions: '/assets/images/app_det_myprof/dashboard/three_dots.svg',
    },
  ];

  constructor() {}
}
