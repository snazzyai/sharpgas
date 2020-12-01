import { Router } from '@angular/router';
import { SignUpServiceService } from '../../../services/Sign-up-Service/sign-up-service.service';
import { EncryptionService } from '../../../services/Encryption/encryption.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/Utilities/CustomValidators';
import { SignUpResponse, SignUpRequest } from 'src/app/Utilities/APIFramework';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  showPassword = false;
  passwordType = 'password';
  showRePassword = false;
  rePasswordType = 'password';

  alphabetRegex = '^[a-zA-Z]+$';
  responseSignUP: SignUpResponse;
  showLoader: boolean;
  disableButton: boolean = true;
  showerror: boolean = false;
  form: FormGroup;

  constructor(
    private service: SignUpServiceService,
    private toastr: ToastrService,
    private router: Router,
    private encryption: EncryptionService
  ) {}

  ngOnInit() {
    this.showLoader = false;
    this.form = new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.pattern(this.alphabetRegex),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.pattern(this.alphabetRegex),
        ]),
        mobileNumber: new FormControl('', [Validators.required]),
        passWord: new FormControl('', [
          Validators.required,
          PasswordValidator.hasLower,
          PasswordValidator.hasNumber,
          PasswordValidator.hasUpper,
          PasswordValidator.valueLength,
        ]),
        emailAdd: new FormControl('', [Validators.required, Validators.email]),
        re_password: new FormControl('', [Validators.required]),
        agreeTerm: new FormControl('', [Validators.requiredTrue]),
      },
      { validators: PasswordValidator.checkPasswords }
    );
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get emailAdd() {
    return this.form.get('emailAdd');
  }

  get mobileNumber() {
    return this.form.get('mobileNumber');
  }

  get passWord() {
    return this.form.get('passWord');
  }

  get re_password() {
    return this.form.get('re_password');
  }

  get agreeTerm() {
    return this.form.get('agreeTerm');
  }

  // passwordChange() {
  //   return PasswordValidator.hideShowPassword(
  //     this.showPassword,
  //     this.passwordType
  //   );
  // }
  // show and hide password
  // hideShowPassword(showPassword, passwordType);

  hideShowPassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  hideShowRePassword() {
    this.showRePassword = !this.showRePassword;
    if (this.rePasswordType === 'password') {
      this.rePasswordType = 'text';
    } else {
      this.rePasswordType = 'password';
    }
  }

  submitForm(request: any) {
    if (this.form.invalid) {
      PasswordValidator.validateAllFormFields(this.form);
      return;
    }

    // encrypt signup data


    this.showLoader = true;
    this.disableButton = false;
    request = {
      firstname: this.encryption.encrypt2(this.form.value.firstName),
      lastName: this.encryption.encrypt2(this.form.value.lastName),
      email: this.encryption.encrypt2(this.form.value.emailAdd),
      mobileNumber: this.encryption.encrypt2(this.form.value.mobileNumber),
      password: this.encryption.encrypt2(this.form.value.passWord),
    };

    console.log(request);

    return this.service.SubmitSignUpForm(request).subscribe(
      (response) => {
        console.log('signup response ', response);
        this.responseSignUP = response;
        if (this.responseSignUP.status === 200) {
          this.toastr.success(this.responseSignUP.description, 'Success!', {
            positionClass: 'toast-bottom-right',
          });
          this.router.navigate(['login']);
          this.showLoader = false;
          this.disableButton = true;
        } else {
          this.toastr.error(this.responseSignUP.description, 'Failed!', {
            positionClass: 'toast-bottom-right',
          });
          this.showLoader = false;
          this.disableButton = true;
        }
      },
      (error: Response) => {
        if (error.status === 404) {
          this.toastr.error(
            'An error occured : please contact support@sharpgas.com',
            'Failed!',
            { positionClass: 'toast-bottom-right' }
          );
          console.log(error);
          this.showLoader = false;
          this.disableButton = true;
        } else {
          this.toastr.error(
            'An error occured : please contact support@sharpgas.com',
            'Failed!',
            { positionClass: 'toast-bottom-right' }
          );
          console.log(error);
          this.showLoader = false;
          this.disableButton = true;
        }
      }
    );
  }
}
