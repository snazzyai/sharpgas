import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './container/sign-up.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up.routing';


@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, SignUpRoutingModule, ReactiveFormsModule],
})
export class SignUpModule {}
