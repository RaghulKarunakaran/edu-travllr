import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  @ViewChild('widgetsContent')
  widgetsContent!: ElementRef;
  people_data = [
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
    {
      position: 'position',
      name: 'name',
      img: 'assets/images/about-us/Rectangle 6606.svg',
    },
  ];
  value_data = [
    {
      icon: 'assets/images/about-us/Vector (6).svg',
      value: 'value 1',
      title: 'Title 1',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel suspendisse ultrices diam sed. Ut pharetra odio ullamcorper erat vel sed. Elementum dolor sit lacus, morbi. Nisi odio ac est lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel suspendisse ultrices',
    },
    {
      icon: 'assets/images/about-us/Vector (6).svg',
      value: 'value 1',
      title: 'Title 1',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel suspendisse ultrices diam sed. Ut pharetra odio ullamcorper erat vel sed. Elementum dolor sit lacus, morbi. Nisi odio ac est lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel suspendisse ultrices',
    },
    {
      icon: 'assets/images/about-us/Vector (6).svg',
      value: 'value 1',
      title: 'Title 1',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel suspendisse ultrices diam sed. Ut pharetra odio ullamcorper erat vel sed. Elementum dolor sit lacus, morbi. Nisi odio ac est lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel suspendisse ultrices',
    },
    {
      icon: 'assets/images/about-us/Vector (6).svg',
      value: 'value 1',
      title: 'Title 1',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel suspendisse ultrices diam sed. Ut pharetra odio ullamcorper erat vel sed. Elementum dolor sit lacus, morbi. Nisi odio ac est lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel suspendisse ultrices',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }
}
