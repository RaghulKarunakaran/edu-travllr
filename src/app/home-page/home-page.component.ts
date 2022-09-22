import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  c4_left_options = [
    {
      id: 1,
      img: 'assets/images/home_page/home_part4_vector/number-circle-one.svg',
      content: 'Get to Know about the process better.',
    },
    {
      id: 2,
      img: 'assets/images/home_page/home_part4_vector/number-circle-two.svg',
      content: 'For Immigration Guidance.',
    },
    {
      id: 3,
      img: 'assets/images/home_page/home_part4_vector/number-circle-three.svg',
      content: 'For Education and Skills Development.',
    },
    {
      id: 4,
      img: 'assets/images/home_page/home_part4_vector/number-circle-four.svg',
      content: 'For Further assistance and other helps.',
    },
  ];
  c8_logos = [
    {
      id: '1',
      img: 'assets/images/home_page/home_part8_vector/589a48bc5aa6293a4aac48ba.svg',
    },
    {
      id: '2',
      img: 'assets/images/home_page/home_part8_vector/589a474e5aa6293a4aac48b5.svg',
    },
    {
      id: '3',
      img: 'assets/images/home_page/home_part8_vector/5847e7a1cef1014c0b5e480f.svg',
    },
    {
      id: '4',
      img: 'assets/images/home_page/home_part8_vector/58568dc64f6ae202fedf2722.svg',
    },
    {
      id: '5',
      img: 'assets/images/home_page/home_part8_vector/585990034f6ae202fedf28cc.svg',
    },
  ];
  c9_icons = [
    {
      id: '1',
      img: 'assets/images/home_page/home_part9_vector/map-pin.svg',
      p: 'location',
    },
    {
      id: '3',
      img: 'assets/images/home_page/home_part9_vector/mail.svg',
      p: 'email',
    },
    {
      id: '2',
      img: 'assets/images/home_page/home_part9_vector/phone-call.svg',
      p: 'contact',
    },
  ];
  c7_carousel = [
    {
      id: '1',
      img: 'assets/images/home_page/home_part7_image/pexels-antoni-shkraba-7579363 1.jpg',
      name: 'Joey Tribbiani',
      p: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit',
    },
    {
      id: '2',
      img: 'assets/images/home_page/home_part7_image/DSC04230 copy 1.jpg',
      name: 'Joey Tribbiani 1',
      p: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit',
    },
    {
      id: '3',
      img: 'assets/images/home_page/home_part7_image/ADI_7218.jpg',
      name: 'Joey Tribbiani 2',
      p: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit',
    },
    {
      id: '4',
      img: 'assets/images/home_page/home_part7_image/pexels-antoni-shkraba-7579363 1.jpg',
      name: 'Joey Tribbiani 3',
      p: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  paragraph = '';
  OnSubmit() {}
  btn_click() {
    this.paragraph = 'clicked';
  }
  invoke_blogs() {}
}
