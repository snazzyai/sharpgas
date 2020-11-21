import { ResetPasswordComponent } from './container/reset-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password.routing';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule
  ]
})
export class ResetPasswordModule { }
