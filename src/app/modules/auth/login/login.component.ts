import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  SignupForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.SignupForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.SignupForm.value);
    //this.authService.login(this.SignupForm.value);
    this.authService.check();
  }
}
