import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() currentOption: String = '';
  page = 1;
  profileForm: FormGroup;
  formcontrols = [
    { id: '1', label: 'Salutation', control: 'salutation', type: 'text' },
    {
      id: '2',
      label: 'First Name (As per passport)',
      control: 'firstname',
      type: 'text',
    },
    { id: '3', label: 'Last Name', control: 'lastname', type: 'text' },
    { id: '4', label: 'Former Name', control: 'formername', type: 'text' },
    {
      id: '5',
      label: 'Mobile Number',
      control: 'mobilenumber',
      type: 'number',
    },
    { id: '6', label: 'Email id', control: 'email', type: 'email' },
    { id: '7', label: 'Father Name', control: 'fathername', type: 'text' },
    {
      id: '8',
      label: 'GrandFather full Name',
      control: 'grandfathername',
      type: 'text',
    },
    {
      id: '9',
      label: 'Emergency Contact Number',
      control: 'emergencycontactnumber',
      type: 'number',
    },
    {
      id: '10',
      label: 'Passport Number',
      control: 'passportnumber',
      type: 'number',
    },
    {
      id: '11',
      label: 'Home phone Number',
      control: 'homephonenumber',
      type: 'number',
    },
    { id: '12', label: 'Date of birth', control: 'dateofbirth', type: 'date' },
    {
      id: '13',
      label: 'Place of birth (As per passport)',
      control: 'placeofbirth',
      type: 'text',
    },
    {
      id: '14',
      label: 'Native Language',
      control: 'nativelanguage',
      type: 'text',
    },
    {
      id: '15',
      label: 'languages Known',
      control: 'languagesknown',
      type: 'text',
    },
    {
      id: '16',
      label: 'Additional known knowledge',
      control: 'additionalknowledge',
      type: 'text',
    },
  ];
  formcontrols2 = [
    { id: '1', label: 'House Number', control: 'housenumber', type: 'number' },
    { id: '2', label: 'Street Name', control: 'streetname', type: 'text' },
    { id: '3', label: 'City', control: 'city', type: 'text' },
    { id: '4', label: 'State', control: 'state', type: 'text' },
    { id: '5', label: 'Country', control: 'country', type: 'text' },
    { id: '6', label: 'Pincode', control: 'pincode', type: 'number' },
  ];
  formcontrols3 = [
    { id: '1', label: 'Mother Name', control: 'mothername', type: 'text' },
    {
      id: '2',
      label: 'Education Level',
      control: 'mothereducationlevel',
      type: 'text',
    },
    { id: '3', label: 'Father Name', control: 'fathername', type: 'text' },
    {
      id: '4',
      label: 'Education Level',
      control: 'fathereducationlevel',
      type: 'text',
    },
  ];
  formcontrols4 = [
    {
      id: '1',
      label: 'Heighest Degree Earned',
      control: 'highestdegree',
      type: 'text',
    },
    {
      id: '2',
      label: 'College Name',
      control: 'collegename',
      type: 'text',
    },
    {
      id: '3',
      label: 'Address',
      control: 'address',
      type: 'text',
    },
    {
      id: '4',
      label: 'Pincode',
      control: 'pincode',
      type: 'number',
    },
    {
      id: '5',
      label: 'Unirversity Name',
      control: 'universityname',
      type: 'text',
    },
    {
      id: '6',
      label: 'Unirversity City',
      control: 'universitycity',
      type: 'text',
    },
    {
      id: '7',
      label: 'Branch / major',
      control: 'branch',
      type: 'text',
    },
    {
      id: '8',
      label: 'Percentage / GPA',
      control: 'average',
      type: 'number',
    },
    {
      id: '9',
      label: 'Backlogs',
      control: 'firstbacklogs',
      type: 'text',
    },
    {
      id: '10',
      label: 'Start Date',
      control: 'startdate',
      type: 'date',
    },
    {
      id: '11',
      label: 'End Date',
      control: 'enddate',
      type: 'date',
    },
    {
      id: '12',
      label: 'Backlogs',
      control: 'secondbacklogs',
      type: 'text',
    },
    {
      id: '13',
      label: 'Subject 1',
      control: 'subject1',
      type: 'text',
    },
    {
      id: '14',
      label: 'Subject 2',
      control: 'subject2',
      type: 'text',
    },
    {
      id: '15',
      label: '12TH /intermediate',
      control: 'hscmarks',
      type: 'text',
    },
    {
      id: '16',
      label: '10th',
      control: 'sslcmarks',
      type: 'text',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstsection: new FormGroup({
        semesterapplying: new FormControl(null, [Validators.required]),
        year: new FormControl(null, [Validators.required]),
        salutation: new FormControl(null, [Validators.required]),
        firstname: new FormControl(null, [Validators.required]),
        lastname: new FormControl(null, [Validators.required]),
        formername: new FormControl(null, [Validators.required]),
        mobilenumber: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        fathername: new FormControl(null, [Validators.required]),
        grandfathername: new FormControl(null, [Validators.required]),
        emergencycontactnumber: new FormControl(null, [Validators.required]),
        passportnumber: new FormControl(null, [Validators.required]),
        homephonenumber: new FormControl(null, [Validators.required]),
        dateofbirth: new FormControl(null, [Validators.required]),
        placeofbirth: new FormControl(null, [Validators.required]),
        nativelanguage: new FormControl(null, [Validators.required]),
        languagesknown: new FormControl(null, [Validators.required]),
        additionalknowledge: new FormControl(null, [Validators.required]),
      }),
      secondsection: new FormGroup({
        housenumber: new FormControl(null, [Validators.required]),
        streetname: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
        pincode: new FormControl(null, [Validators.required]),
      }),
      thirdsection: new FormGroup({
        mothername: new FormControl(null, [Validators.required]),
        mothereducationlevel: new FormControl(null, [Validators.required]),
        fathername: new FormControl(null, [Validators.required]),
        fathereducationlevel: new FormControl(null, [Validators.required]),
      }),
      fourthsection: new FormGroup({
        highestdegree: new FormControl(null, [Validators.required]),
        collegename: new FormControl(null, [Validators.required]),
        address: new FormControl(null, [Validators.required]),
        pincode: new FormControl(null, [Validators.required]),
        universityname: new FormControl(null, [Validators.required]),
        universitycity: new FormControl(null, [Validators.required]),
        branch: new FormControl(null, [Validators.required]),
        average: new FormControl(null, [Validators.required]),
        firstbacklogs: new FormControl(null, [Validators.required]),
        startdate: new FormControl(null, [Validators.required]),
        enddate: new FormControl(null, [Validators.required]),
        secondbacklogs: new FormControl(null, [Validators.required]),
        subject1: new FormControl(null, [Validators.required]),
        subject2: new FormControl(null, [Validators.required]),
        hscmarks: new FormControl(null, [Validators.required]),
        sslcmarks: new FormControl(null, [Validators.required]),
      }),
    });
  }
  get firstsectionFormGroup() {
    return this.profileForm.get('firstsection') as FormGroup;
  }
  get secondsectionFormGroup() {
    return this.profileForm.get('secondsection') as FormGroup;
  }
  get thirdsectionFormGroup() {
    return this.profileForm.get('thirdsection') as FormGroup;
  }
  get fourthsectionFormGroup() {
    return this.profileForm.get('fourthsection') as FormGroup;
  }
  screen(ind: string) {
    if (ind == 'next') {
      this.page = this.page + 1;
    } else if (ind == 'prev') {
      this.page = this.page - 1;
    }
  }
  reset() {
    this.profileForm.reset();
  }
  onSubmit() {
    console.log(this.profileForm);
  }
}
