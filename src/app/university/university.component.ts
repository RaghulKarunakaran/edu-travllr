import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css'],
})
export class UniversityComponent implements OnInit {
  isMajoropen: boolean = false;
  isuniv_type: boolean = false;
  isintake: boolean = false;
  isscholarship: boolean = false;
  iscourse: boolean = false;
  isep_exam: boolean = false;
  isap_exam: boolean = false;
  isranking: boolean = false;
  countries = [
    { id: 1, name: 'Lorem ipsum' },
    { id: 2, name: 'Lorem ipsum' },
    { id: 3, name: 'Lorem ipsum' },
    { id: 4, name: 'Lorem ipsum' },
    { id: 5, name: 'Lorem ipsum' },
    { id: 6, name: 'Lorem ipsum' },
  ];
  Major = [
    { id: 1, name: 'Undergraduate' },
    { id: 2, name: 'Post Graduate' },
    { id: 3, name: 'Research' },
  ];
  univ_type = [
    { id: 1, name: 'Affiliated Universities' },
    { id: 2, name: 'Private' },
    { id: 3, name: 'Deemed university' },
    { id: 4, name: 'State Universities' },
  ];
  intake = [
    { id: 1, range: '20 - 50' },
    { id: 2, range: '10 - 20' },
    { id: 3, range: '0 - 10' },
    { id: 4, range: '50 - 200' },
    { id: 5, range: '201 - 500' },
  ];
  scholarship_availability = [
    { id: 1, option: 'Yes' },
    { id: 2, option: 'No' },
  ];
  course_duration = [
    { id: 1, duration: '2 years' },
    { id: 2, duration: '3 years' },
    { id: 3, duration: '4 years' },
    { id: 4, duration: '5 years' },
  ];
  English_proficiency_exam = [
    { id: 1, exam: 'English Proficiency Exam' },
    { id: 2, exam: 'TOEFl Score' },
    { id: 3, exam: ' PTE Score' },
    { id: 4, exam: 'Waiver available' },
  ];
  Academic_proficiency_exam = [
    { id: 1, exam: 'GRE' },
    { id: 2, exam: 'GMAT' },
    { id: 3, exam: 'SAT' },
    { id: 4, exam: 'ACT' },
  ];
  Ranking = [
    { id: 1, rank: 'Top 10' },
    { id: 2, rank: 'Top 50' },
    { id: 3, rank: 'Top 100' },
    { id: 4, rank: 'Top 150' },
  ];
  universities = [
    {
      id: 1,
      left_img: 'assets/images/university/jeff-tumale-rbdQHqcu-yo-unsplash.svg',
      right_div1_logo: 'assets/images/university/Rectangle 6414.svg',
      right_div1_univ_name: 'The University of manchester',
      right_div1_univ_loc: 'Manchester, United Kingdom',
      right_div2_p1_1: '6',
      right_div2_p1_2: 'Minimum IELTS Required',
      right_div2_p2_1: '27',
      right_div2_p2_2: 'Ranking',
      right_div2_p3_1: 'Private',
      right_div2_p3_2: 'university',
      right_div3_p:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat readmore',
      right_div4_li: 'Lorem ipsum',
    },
    {
      id: 2,
      left_img: 'assets/images/university/jeff-tumale-rbdQHqcu-yo-unsplash.svg',
      right_div1_logo: 'assets/images/university/Rectangle 6414.svg',
      right_div1_univ_name: 'The University of manchester',
      right_div1_univ_loc: 'Manchester, United Kingdom',
      right_div2_p1_1: '6',
      right_div2_p1_2: 'Minimum IELTS Required',
      right_div2_p2_1: '27',
      right_div2_p2_2: 'Ranking',
      right_div2_p3_1: 'Private',
      right_div2_p3_2: 'university',
      right_div3_p:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat readmore',
      right_div4_li: 'Lorem ipsum',
    },
    {
      id: 3,
      left_img: 'assets/images/university/jeff-tumale-rbdQHqcu-yo-unsplash.svg',
      right_div1_logo: 'assets/images/university/Rectangle 6414.svg',
      right_div1_univ_name: 'The University of manchester',
      right_div1_univ_loc: 'Manchester, United Kingdom',
      right_div2_p1_1: '6',
      right_div2_p1_2: 'Minimum IELTS Required',
      right_div2_p2_1: '27',
      right_div2_p2_2: 'Ranking',
      right_div2_p3_1: 'Private',
      right_div2_p3_2: 'university',
      right_div3_p:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat readmore',
      right_div4_li: 'Lorem ipsum',
    },
    {
      id: 4,
      left_img: 'assets/images/university/jeff-tumale-rbdQHqcu-yo-unsplash.svg',
      right_div1_logo: 'assets/images/university/Rectangle 6414.svg',
      right_div1_univ_name: 'The University of manchester',
      right_div1_univ_loc: 'Manchester, United Kingdom',
      right_div2_p1_1: '6',
      right_div2_p1_2: 'Minimum IELTS Required',
      right_div2_p2_1: '27',
      right_div2_p2_2: 'Ranking',
      right_div2_p3_1: 'Private',
      right_div2_p3_2: 'university',
      right_div3_p:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat readmore',
      right_div4_li: 'Lorem ipsum',
    },
    {
      id: 5,
      left_img: 'assets/images/university/jeff-tumale-rbdQHqcu-yo-unsplash.svg',
      right_div1_logo: 'assets/images/university/Rectangle 6414.svg',
      right_div1_univ_name: 'The University of manchester',
      right_div1_univ_loc: 'Manchester, United Kingdom',
      right_div2_p1_1: '6',
      right_div2_p1_2: 'Minimum IELTS Required',
      right_div2_p2_1: '27',
      right_div2_p2_2: 'Ranking',
      right_div2_p3_1: 'Private',
      right_div2_p3_2: 'university',
      right_div3_p:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat readmore',
      right_div4_li: 'Lorem ipsum',
    },
    {
      id: 6,
      left_img: 'assets/images/university/jeff-tumale-rbdQHqcu-yo-unsplash.svg',
      right_div1_logo: 'assets/images/university/Rectangle 6414.svg',
      right_div1_univ_name: 'The University of manchester',
      right_div1_univ_loc: 'Manchester, United Kingdom',
      right_div2_p1_1: '6',
      right_div2_p1_2: 'Minimum IELTS Required',
      right_div2_p2_1: '27',
      right_div2_p2_2: 'Ranking',
      right_div2_p3_1: 'Private',
      right_div2_p3_2: 'university',
      right_div3_p:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat readmore',
      right_div4_li: 'Lorem ipsum',
    },
    {
      id: 7,
      left_img: 'assets/images/university/jeff-tumale-rbdQHqcu-yo-unsplash.svg',
      right_div1_logo: 'assets/images/university/Rectangle 6414.svg',
      right_div1_univ_name: 'The University of manchester',
      right_div1_univ_loc: 'Manchester, United Kingdom',
      right_div2_p1_1: '6',
      right_div2_p1_2: 'Minimum IELTS Required',
      right_div2_p2_1: '27',
      right_div2_p2_2: 'Ranking',
      right_div2_p3_1: 'Private',
      right_div2_p3_2: 'university',
      right_div3_p:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat readmore',
      right_div4_li: 'Lorem ipsum',
    },
    {
      id: 8,
      left_img: 'assets/images/university/jeff-tumale-rbdQHqcu-yo-unsplash.svg',
      right_div1_logo: 'assets/images/university/Rectangle 6414.svg',
      right_div1_univ_name: 'The University of manchester',
      right_div1_univ_loc: 'Manchester, United Kingdom',
      right_div2_p1_1: '6',
      right_div2_p1_2: 'Minimum IELTS Required',
      right_div2_p2_1: '27',
      right_div2_p2_2: 'Ranking',
      right_div2_p3_1: 'Private',
      right_div2_p3_2: 'university',
      right_div3_p:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat readmore',
      right_div4_li: 'Lorem ipsum',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  Major_click() {
    this.isMajoropen = !this.isMajoropen;
  }
  univ_click() {
    this.isuniv_type = !this.isuniv_type;
  }
  intake_click() {
    this.isintake = !this.isintake;
  }
  scholarship_click() {
    this.isscholarship = !this.isscholarship;
  }
  course_click() {
    this.iscourse = !this.iscourse;
  }
  ep_exam_click() {
    this.isep_exam = !this.isep_exam;
  }
  ap_exam_click() {
    this.isap_exam = !this.isap_exam;
  }
  ranking_click() {
    this.isranking = !this.isranking;
  }
}
