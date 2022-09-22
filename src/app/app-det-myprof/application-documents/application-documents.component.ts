import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-documents',
  templateUrl: './application-documents.component.html',
  styleUrls: ['./application-documents.component.css'],
})
export class ApplicationDocumentsComponent implements OnInit {
  @Input() currentOption: String = '';
  constructor() {}

  ngOnInit(): void {}
}
