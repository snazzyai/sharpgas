import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/Utilities/CustomValidators';
import { LoginServiceService } from '../../../services/Login-Service/login-service.service';
import { LoginRequest, LoginResponse } from '../../../Utilities/APIFramework';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { EncryptionService } from '../../../services/Encryption/encryption.service';
import {AuthenticationService} from '../../../services/Authentication/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild(ToastContainerDirective, { static: true })

  toastContainer: ToastContainerDirective;
  showPassword: boolean = false;
  passwordType: string = 'password';
  showLoader: boolean;
  request: LoginRequest;
  loginResponse: LoginResponse;
  form: FormGroup;

  constructor(
    private toastr: ToastrService,
    private service: LoginServiceService,
    private router: Router,
    private encryption: EncryptionService,
    private authentication: AuthenticationService,

  ) {}

  ngOnInit() {
    this.toastr.overlayContainer = this.toastContainer;
    this.form = new FormGroup({
      passWord: new FormControl('', [Validators.required]),
      emailAdd: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get emailAdd() {
    return this.form.get('emailAdd');
  }

  get passWord() {
    return this.form.get('passWord');
  }



  hideShowPassword() {
    if (this.showPassword) {
      this.showPassword = false;
      this.passwordType = 'password';
    } else {
      this.showPassword = true;
      this.passwordType = 'text';
    }
  }


  login(request: any){
   return this.service.submitLoginForm(request).subscribe(
      (resp: any) => {
        console.log(resp);
        return false;
      }
    );
  }



  submitForm(request: any) {

    if (this.form.invalid) {
      PasswordValidator.validateAllFormFields(this.form);
      return;
    }
    // encrypt user details

    request = {
      username: this.encryption.encrypt2("john.doe"),
      password: this.encryption.encrypt2("john.password")
    };

    console.log(request);
    this.showLoader = true;


    // if (userToken === null){
      console.log('authenticate!')
      this.authentication.Authenticate(request).subscribe(
        (response) => {
          this.showLoader = false;

          console.log(response)
          this.authentication.storeUserToken(response);
          console.log('storedUser')

          // if (userToken){
          //   this.login(request);
          // }
          // else{
          //   console.log('user token not found!');
          //   return false;
          // }
        }
      );
    // }
    // else{
    //   this.login(request);
    //   this.showLoader = false;

    // }
    // this.service.submitLoginForm(request).subscribe(
    //   (response) => {
    //     console.log('response gotten')
    //     this.loginResponse = response;
    //     if (this.loginResponse.status === 200) {
    //       const user = this.loginResponse.CustomerDetails[0];
    //       this.showLoader = false;
    //       // stores user data in localstorage
    //       // this.service.storeUser(
    //       //   user.CustomerID,
    //       //   user.FirstName,
    //       //   user.LastName,
    //       //   user.Username,
    //       //   user.MobileNumber,
    //       //   user.EmailAddress,
    //       //   user.Country,
    //       //   user.Address_1,
    //       //   user.Address_2
    //       // );
    //       this.router.navigate(['/portal/dashboard']);
    //       this.toastr.success(this.loginResponse.description, 'Success!');
    //     } else {
    //       console.log('error')
    //       this.toastr.error(this.loginResponse.description, 'Failed!');
    //       this.showLoader = false;
    //     }
    //   },
    //   (error: Response) => {
    //     if (error.status === 404) {
    //       this.toastr.error(
    //         'An error occured : please contact support@sharpgas.com',
    //         'Failed!',
    //       );
    //       console.log("error1", error);
    //       this.showLoader = false;
    //     } else {
    //       this.toastr.success(
    //         'An error occured : please contact support@sharpgas.com',
    //         'Failed!',
    //       );
    //       console.log("error2",error);
    //       this.showLoader = false;
    //     }
    //   }
    // );
  }
}
