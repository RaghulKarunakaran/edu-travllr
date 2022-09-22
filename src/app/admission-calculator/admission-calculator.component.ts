import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-calculator',
  templateUrl: './admission-calculator.component.html',
  styleUrls: ['./admission-calculator.component.css'],
})
export class AdmissionCalculatorComponent implements OnInit {
  data: any = { levelOfStudy: null, countries: [], fields: [], courses: [] };
  count: number = 0;
  progress: number = 0;
  new_country = '';
  new_course = '';
  new_field = '';
  button1_name = 'Previous';
  button2_name = 'Next';
  dropdown_countries = [
    { id: 1, country_name: 'India' },
    { id: 2, country_name: 'USA' },
    { id: 3, country_name: 'London' },
    { id: 4, country_name: 'Canada' },
  ];
  dropdown_fields = [
    { id: 1, field_name: 'Arts' },
    { id: 2, field_name: 'Engineering' },
    { id: 3, field_name: 'Medicine' },
  ];
  dropdown_courses = [
    { id: 1, course_name: 'Mechanical' },
    { id: 2, course_name: 'Electrical' },
    { id: 3, course_name: 'Bio-medical' },
  ];
  constructor() {}

  ngOnInit(): void {}
  updateLevelOfStudy(type: string) {
    this.data.levelOfStudy = type;
    this.data.countries = [];
    this.data.fields = [];
    this.data.courses = [];
    this.count = 0;
    //this.next_count = this.next_count + 1;
  }
  updateCountry(country: any) {
    let result = this.data.countries.find(
      (cntry: { id: any }) => cntry.id == country.id
    );
    if (result == null) {
      this.data.countries.push(country);
    }
    //this.next_count = this.next_count + 1;
    console.log(this.data.countries);
  }
  deleteCountry(index: any) {
    this.data.countries.splice(index, 1);
    console.log(this.data.countries);
  }
  updateField(field: any) {
    let result = this.data.fields.find(
      (flds: { id: any }) => flds.id == field.id
    );
    if (result == null) {
      this.data.fields.push(field);
    }
    //this.next_count = this.next_count + 1;
    console.log(this.data.fields);
  }
  deleteField(index: any) {
    this.data.fields.splice(index, 1);
    console.log(this.data.fields);
  }
  updateCourse(course: any) {
    let result = this.data.courses.find(
      (crs: { id: any }) => crs.id == course.id
    );
    if (result == null) {
      this.data.courses.push(course);
    }
    //this.next_count = this.next_count + 1;
    console.log(this.data.courses);
  }
  deleteCourse(index: any) {
    this.data.courses.splice(index, 1);
    console.log(this.data.courses);
  }
  next() {
    if (this.count == 2) {
      this.button1_name = 'Discard';
      this.button2_name = 'Continue';
    }
    if (this.count == 3) {
      console.log(this.data);
    }
    this.count = this.count + 1;
    this.progress = this.progress + 25;
  }
  previous() {
    console.log(this.count);
    if (this.count == 3) {
      this.button1_name = 'Previous';
      this.button2_name = 'Next';
    }
    this.count = this.count - 1;
    this.progress = this.progress - 25;
  }
  disable() {
    if (this.count == 0 && this.data.levelOfStudy != null) {
      return false;
    } else if (
      this.count == 1 &&
      this.data.levelOfStudy != null &&
      this.data.countries.length > 0
    ) {
      return false;
    } else if (
      this.count == 2 &&
      this.data.levelOfStudy != null &&
      this.data.countries.length > 0 &&
      this.data.fields.length > 0
    ) {
      return false;
    } else if (
      this.count == 3 &&
      this.data.levelOfStudy != null &&
      this.data.countries.length > 0 &&
      this.data.fields.length > 0 &&
      this.data.courses.length > 0
    ) {
      return false;
    } else {
      return true;
    }
  }
}
