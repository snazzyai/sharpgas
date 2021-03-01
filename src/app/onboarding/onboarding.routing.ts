import { OnboardingComponent } from './container/onboarding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService as AuthGuard} from '../services/AuthGuard/auth-guard.service'


const routes :Routes = [
  {
    path: '',
    component: OnboardingComponent,
    children: [
      {
        path:'',
        redirectTo: 'landing-page',
        pathMatch: 'full',
      },
      {
        path: 'landing-page',
        loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
      },
      {
        path: 'login',

        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      },
      {
        path: 'dashboard',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class OnboardingRoutingModule {

 }
