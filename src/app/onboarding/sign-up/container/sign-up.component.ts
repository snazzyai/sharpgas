import { Router } from '@angular/router';
import { SignUpServiceService } from '../../../services/Sign-up-Service/sign-up-service.service';
import { EncryptionService } from '../../../services/Encryption/encryption.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/Utilities/CustomValidators';
import { SignUpResponse, SignUpRequest } from 'src/app/Utilities/APIFramework';
import { ToastrService } from 'ngx-toastr';
import {AuthenticationService} from '../../../services/Authentication/authentication.service';

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
  showLoader: boolean;
  disableButton: boolean = false;
  showerror: boolean = false;
  form: FormGroup;

  constructor(
    private signupService: SignUpServiceService,
    private toastr: ToastrService,
    private router: Router,
    private encryption: EncryptionService,
    private authService: AuthenticationService

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


  disableLoaders(){
    this.showLoader = false
    this.disableButton = false;
  }

  showLoaders(){
    this.showLoader = true
    this.disableButton = true
  }



  authentication(userData, adminData){
    this.authService.Authenticate(adminData).subscribe((response)=>{
      console.log(response)
      if(response.message === "Success"){
        //store response in observable
        const token = response.data.bearerToken
        const exp = response.data.expiryPeriod
        this.authService.storeToken(response)
        this.signup(userData, token)
      }
      else {
        console.log('unable to store token')
        this.disableLoaders();
      }
    })
  }


  signup(userData, token){
    this.signupService.SubmitSignUpForm(userData, token).subscribe((resp)=>{
      //pass user data to an observable
      console.log(resp)
      if(this.authService.storeUser(resp)){
        this.router.navigate(['onboarding/dashboard'])
        this.disableLoaders();
      }
      else{
        console.log('couldnt store user');
        this.disableLoaders()
      }
    })
  }

  submitForm(form: any) {
    if (this.form.invalid) {
      PasswordValidator.validateAllFormFields(this.form);
      return;
    }
    this.showLoaders()
    const adminData = this.encryption.adminEncryptedData()

    const encryptedUserData = this.encryption.signupEncrptedData(form)

    this.authentication(encryptedUserData, adminData);

  }
}
