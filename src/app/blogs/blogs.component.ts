import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  countries = [
    'USA',
    'Canada',
    'USA',
    'Canada',
    'USA',
    'Canada',
    'USA',
    'Canada',
    'USA',
    'Canada',
    'USA',
    'Canada',
    'USA',
    'Canada',
    'USA',
    'Canada',
    'USA',
    'Canada',
    'USA',
    'Canada',
    'USA',
    'Canada',
    'USA',
    'Canada',
  ];
  country_right_data = [
    {
      img: 'assets/images/blogs/Rectangle (1).svg',
      c_name: 'Canada',
      c_detail: 'Collaboration begins with empathy',
    },
    {
      img: 'assets/images/blogs/Rectangle (2).svg',
      c_name: 'USA',
      c_detail: 'Proven strategies for scaling your design system',
    },
    {
      img: 'assets/images/blogs/Rectangle (3).svg',
      c_name: 'Canada',
      c_detail: 'The benefits of using responsive web design',
    },
    {
      img: 'assets/images/blogs/Rectangle (4).svg',
      c_name: 'Canada',
      c_detail: 'The benefits of using responsive web design',
    },
    {
      img: 'assets/images/blogs/Rectangle (4).svg',
      c_name: 'Canada',
      c_detail: 'The benefits of using responsive web design',
    },
    {
      img: 'assets/images/blogs/Rectangle (4).svg',
      c_name: 'Canada',
      c_detail: 'The benefits of using responsive web design',
    },
    {
      img: 'assets/images/blogs/Rectangle (4).svg',
      c_name: 'Canada',
      c_detail: 'The benefits of using responsive web design',
    },
    {
      img: 'assets/images/blogs/Rectangle (4).svg',
      c_name: 'Canada',
      c_detail: 'The benefits of using responsive web design',
    },
  ];
  countries_data3 = [
    {
      img: 'assets/images/blogs/T.svg',
      c_name: '- Canada',
      c_feature: ' Travel &Study Aboard ',
      c_detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ...',
    },
    {
      img: 'assets/images/blogs/O.svg',
      c_name: '- Canada',
      c_feature: ' Overseas Event ',
      c_detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ...',
    },
    {
      img: 'assets/images/blogs/pf-mu6-ake6324-chim-l 1.svg',
      c_name: '- USA',
      c_feature: ' Onbong university ',
      c_detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ...',
    },
    {
      img: 'assets/images/blogs/image 49.svg',
      c_name: '- USA',
      c_feature: '  How to get visa  ',
      c_detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ...',
    },
    {
      img: 'assets/images/blogs/T.svg',
      c_name: '- Canada',
      c_feature: ' Travel &Study Aboard ',
      c_detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ...',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
