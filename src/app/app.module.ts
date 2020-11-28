// import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageModule } from './onboarding/landing-page/landing-page.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { ResetPasswordModule } from './onboarding/reset-password/reset-password.module';
import { DashboardModule } from './onboarding/dashboard/dashboard.module';
import { PortfolioModule } from './onboarding/dashboard/portfolio/portfolio.module';
import { BuyGasModule } from './onboarding/dashboard/buy-gas/buy-gas.module';
import { SharedModule} from './components/shared/shared.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule,
    OnboardingModule,
    ResetPasswordModule,
    LandingPageModule,
    DashboardModule,
    PortfolioModule,
    BuyGasModule,
    SharedModule
  ],
  exports: [ReactiveFormsModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
