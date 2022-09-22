import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdmissionCalculatorComponent } from './admission-calculator/admission-calculator.component';
import { AppDetMyprofComponent } from './app-det-myprof/app-det-myprof.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CostOfLivingCalculatorComponent } from './cost-of-living-calculator/cost-of-living-calculator.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FreeCounsellingComponent } from './free-counselling/free-counselling.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((e) => e.AuthModule),
  },
  { path: 'blogs', component: BlogsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'university', component: UniversityComponent },
  { path: 'flight-booking', component: FlightBookingComponent },
  { path: 'free-counselling', component: FreeCounsellingComponent },
  { path: 'admission-calculator', component: AdmissionCalculatorComponent },
  { path: 'cost-of-living', component: CostOfLivingCalculatorComponent },
  { path: 'app-detail-myprof', component: AppDetMyprofComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
