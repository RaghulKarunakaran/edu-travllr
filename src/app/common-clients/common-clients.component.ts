import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-clients',
  templateUrl: './common-clients.component.html',
  styleUrls: ['./common-clients.component.css'],
})
export class CommonClientsComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
