import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.css'],
})
export class LoginOtpComponent implements OnInit {
  @ViewChildren('formRow') rows: QueryList<ElementRef<HTMLInputElement>>;
  formInput = ['input1', 'input2', 'input3', 'input4'];
  form = this.toFormGroup(this.formInput);
  private isValid = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() {
    this.form.valueChanges.subscribe((val: any) => {
      let otp = Object.values(val).join('');
      if (this.isValid !== this.form.valid) {
        otp = otp.length === 4 ? otp : '';
        // console.log(otp, val);+
        this.onChange(otp);
        this.onTouch(otp);
        this.isValid = this.form.valid;
      }
    });
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  keyUpEvent(event: KeyboardEvent, index: number) {
    const field = this.form.get('input' + (index + 1));
    if (isNaN(field?.value)) {
      field?.setValue('');
      return;
    }
    const pos = index + (event.key === 'Backspace' ? -1 : 1);
    //   pos = index - 1;
    // } else {
    //   pos = index + 1;
    // }
    if (pos > -1 && pos < this.formInput.length) {
      this.rows.get(pos)?.nativeElement.focus();
    }
  }

  toFormGroup(elements: any[]) {
    const group: any = {};
    elements.forEach((key) => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    // this.value = value;
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
