import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.css'],
})
export class ShortlistComponent implements OnInit {
  @Input() currentOption: String = '';

  constructor() {}

  ngOnInit(): void {}
}
