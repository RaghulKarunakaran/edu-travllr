import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-det-myprof',
  templateUrl: './app-det-myprof.component.html',
  styleUrls: ['./app-det-myprof.component.css'],
})
export class AppDetMyprofComponent implements OnInit {
  option: String = 'Dashboard';
  constructor() {}
  ngOnInit(): void {}
  selectedOption(option: String) {
    this.option = option;
  }
}
