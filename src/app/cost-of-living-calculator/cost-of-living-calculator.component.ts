import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-of-living-calculator',
  templateUrl: './cost-of-living-calculator.component.html',
  styleUrls: ['./cost-of-living-calculator.component.css'],
})
export class CostOfLivingCalculatorComponent implements OnInit {
  data: any = {
    countrySelection: {},
    campusSelection: { campus: null, outsideVisit1: 0 },
    foodTypeSelection: { mealType: null, outsideVisit2: 0 },
    transportSelection: null,
    mobileSelection: null,
    preferenceSelection: {},
  };
  optionCountries = [
    {
      id: 1,
      countryName: 'USA',
      country_flag:
        '/assets/images/cost-of-living/United States Of America.svg',
    },
    {
      id: 2,
      countryName: 'Germany',
      country_flag: '/assets/images/cost-of-living/germany.svg',
    },
    {
      id: 3,
      countryName: 'UK',
      country_flag: '/assets/images/cost-of-living/United Kingdom.svg',
    },
    {
      id: 4,
      countryName: 'Canada',
      country_flag: '/assets/images/cost-of-living/Canada.svg',
    },
    {
      id: 5,
      countryName: 'France',
      country_flag: '/assets/images/cost-of-living/France.svg',
    },
    {
      id: 6,
      countryName: 'Japan',
      country_flag: '/assets/images/cost-of-living/Japan.svg',
    },
    {
      id: 7,
      countryName: 'Switzerland',
      country_flag: '/assets/images/cost-of-living/Switzerland.svg',
    },
    {
      id: 8,
      countryName: 'Australia',
      country_flag: '/assets/images/cost-of-living/Australia.svg',
    },
    {
      id: 9,
      countryName: 'China',
      country_flag: '/assets/images/cost-of-living/china.svg',
    },
  ];
  manageFood = [
    {
      id: 1,
      mode: 'Meal Plan',
      img: '/assets/images/cost-of-living/take away.svg',
    },
    {
      id: 2,
      mode: 'Eat Outside',
      img: '/assets/images/cost-of-living/explore restaurant.svg',
    },
    {
      id: 3,
      mode: 'Self Cooking',
      img: '/assets/images/cost-of-living/Sweets.svg',
    },
  ];
  transports = [
    {
      id: 1,
      transportName: 'Public Transport (Monthly Pass)',
      img: '/assets/images/cost-of-living/metro.svg',
    },
    {
      id: 2,
      transportName: 'Hire a cab (Uber/ola)',
      img: '/assets/images/cost-of-living/Taxi.svg',
    },
    {
      id: 3,
      transportName: 'Rental Car',
      img: '/assets/images/cost-of-living/car booking.svg',
    },
    {
      id: 4,
      transportName: 'Walk / Cycling',
      img: '/assets/images/cost-of-living/Cycle.svg',
    },
  ];
  mobileUsage = [
    {
      id: 1,
      usage: 'low',
      img: '/assets/images/cost-of-living/Communication_low.svg',
    },
    {
      id: 2,
      usage: 'medium',
      img: '/assets/images/cost-of-living/Communication_medium.svg',
    },
    {
      id: 3,
      usage: 'high',
      img: '/assets/images/cost-of-living/Communication_high.svg',
    },
  ];
  preferences = [
    { id: 1, text: 'Wifi and Internet' },
    { id: 2, text: 'Gym and fitness' },
    { id: 3, text: 'Health Insurance' },
    { id: 4, text: 'Movie and Concert' },
  ];
  page = 'Country Selection';
  button1Name = 'Previous';
  button2Name = 'Next';
  sc2_min_value = 0;
  sc2_max_value = 10;
  outsideCampusRange = 10;
  count = 0;
  progress = 0;
  value1: number = 0;
  options1: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true,
  };
  value2: number = 0;
  options2: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true,
  };

  constructor() {}

  ngOnInit(): void {}
  //change_slider(event: any) {
  //  this.outsideCampusRange = event.target.value;
  //  console.log(this.outsideCampusRange);
  //}
  next() {
    if (this.count == 4) {
      this.button1Name = 'Discard';
      this.button2Name = 'Continue';
    }
    if (this.count == 5) {
      console.log(this.data);
    }
    this.count = this.count + 1;
    this.progress = this.progress + 25;
    this.page = this.getPage(this.count);
  }
  previous() {
    if (this.count == 5) {
      this.button1Name = 'Previous';
      this.button2Name = 'Next';
    }
    this.count = this.count - 1;
    this.progress = this.progress - 25;
    this.page = this.getPage(this.count);
  }
  getPage(count: number) {
    if (count == 0) {
      return 'Country Selection';
    } else if (count == 1 || count == 2) {
      return 'Accomodation';
    } else if (count == 3) {
      return 'Vehicle Preference';
    } else if (count == 4) {
      return 'Call Preference';
    } else if (count == 5) {
      return 'Other Preference';
    }
    return '';
  }
  countrySelected(country: any) {
    if (this.data.countrySelection[country.id]) {
      delete this.data.countrySelection[country.id];
    } else {
      this.data.countrySelection[country.id] = country;
    }
    const x = Object.values(this.data.countrySelection);
  }
  campusSelected(campus: any) {
    this.data.campusSelection.campus = campus;
  }
  outsideVisitOne() {
    this.data.campusSelection.outsideVisit1 = this.value1;
  }
  foodTypeSelected(food: any) {
    this.data.foodTypeSelection.mealType = food.mode;
  }
  outsideVisitTwo() {
    this.data.foodTypeSelection.outsideVisit2 = this.value2;
  }
  transportSelected(transport: any) {
    this.data.transportSelection = transport.transportName;
  }
  mobileSelected(mobile: any) {
    this.data.mobileSelection = mobile.usage;
  }
  preferenceSelected(preference: any) {
    if (this.data.preferenceSelection[preference.id]) {
      delete this.data.preferenceSelection[preference.id];
    } else {
      this.data.preferenceSelection[preference.id] = preference;
    }
    const y = Object.values(this.data.preferenceSelection);
  }
  disable() {
    if (
      this.count == 0 &&
      Object.keys(this.data.countrySelection).length != 0
    ) {
      return false;
    } else if (
      this.count == 1 &&
      Object.keys(this.data.countrySelection).length != 0 &&
      this.data.campusSelection.campus != null
    ) {
      return false;
    } else if (
      this.count == 2 &&
      Object.keys(this.data.countrySelection).length != 0 &&
      this.data.campusSelection.campus != null &&
      this.data.foodTypeSelection.mealType != null
    ) {
      return false;
    } else if (
      this.count == 3 &&
      Object.keys(this.data.countrySelection).length != 0 &&
      this.data.campusSelection.campus != null &&
      this.data.foodTypeSelection.mealType != null &&
      this.data.transportSelection != null
    ) {
      return false;
    } else if (
      this.count == 4 &&
      Object.keys(this.data.countrySelection).length != 0 &&
      this.data.campusSelection.campus != null &&
      this.data.foodTypeSelection.mealType != null &&
      this.data.transportSelection != null &&
      this.data.mobileSelection != null
    ) {
      return false;
    } else if (
      this.count == 5 &&
      Object.keys(this.data.countrySelection).length != 0 &&
      this.data.campusSelection.campus != null &&
      this.data.foodTypeSelection.mealType != null &&
      this.data.transportSelection != null &&
      this.data.mobileSelection != null &&
      Object.keys(this.data.preferenceSelection).length != 0
    ) {
      return false;
    } else {
      return true;
    }
  }
}
