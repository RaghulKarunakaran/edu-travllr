import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  @Input() currentOption: String = '';
  image = '/assets/images/app_det_myprof/myprofile/Image_dup.svg';
  image1: any;
  profileForm: FormGroup;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      currentaddress: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      state: new FormControl(null, [Validators.required]),
      countryofcitizenship: new FormControl(null, [Validators.required]),
      dateofbirth: new FormControl(null, [Validators.required]),
      countrycode: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      mobilenumber: new FormControl(null, [Validators.required]),
    });
  }
  onFileSelected(event: any) {
    console.log(event);
    this.image1 = URL.createObjectURL(event.target.files[0]);
    this.image1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.image1);
    console.log(this.image1);
  }
  onSubmit() {
    console.log(this.profileForm);
  }
}
