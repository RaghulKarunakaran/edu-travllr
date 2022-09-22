import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';
import { CommonNavbarComponent } from './common-navbar/common-navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UniversityComponent } from './university/university.component';
import { UniversitiesComponent } from './university/universities/universities.component';
import { CommonClientsComponent } from './common-clients/common-clients.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FreeCounsellingComponent } from './free-counselling/free-counselling.component';
import { RouterModule } from '@angular/router';
import { AdmissionCalculatorComponent } from './admission-calculator/admission-calculator.component';
import { CostOfLivingCalculatorComponent } from './cost-of-living-calculator/cost-of-living-calculator.component';
import { AppDetMyprofComponent } from './app-det-myprof/app-det-myprof.component';
import { DashboardComponent } from './app-det-myprof/dashboard/dashboard.component';
import { MyProfileComponent } from './app-det-myprof/my-profile/my-profile.component';
import { ProfileComponent } from './app-det-myprof/profile/profile.component';
import { ApplicationDocumentsComponent } from './app-det-myprof/application-documents/application-documents.component';
import { WishlistComponent } from './app-det-myprof/wishlist/wishlist.component';
import { ShortlistComponent } from './app-det-myprof/shortlist/shortlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BlogsComponent,
    ContactUsComponent,
    CommonFooterComponent,
    CommonNavbarComponent,
    AboutUsComponent,
    UniversityComponent,
    UniversitiesComponent,
    CommonClientsComponent,
    FlightBookingComponent,
    FreeCounsellingComponent,
    AdmissionCalculatorComponent,
    CostOfLivingCalculatorComponent,
    AppDetMyprofComponent,
    DashboardComponent,
    MyProfileComponent,
    ProfileComponent,
    ApplicationDocumentsComponent,
    WishlistComponent,
    ShortlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxSliderModule,
    NgCircleProgressModule.forRoot({
      radius: 60,
      space: -10,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: '#09C61C',
      outerStrokeGradientStopColor: '#09C61C',
      innerStrokeColor: '#E5E5E5',
      innerStrokeWidth: 10,
      title: '',
      animateTitle: false,
      animationDuration: 1000,
      showUnits: false,
      showBackground: false,
      clockwise: true,
      startFromZero: false,
      showSubtitle: false,
      lazy: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
