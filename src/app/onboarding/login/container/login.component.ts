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
  disableButton: boolean = false;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private encryption: EncryptionService,
    private authService: AuthenticationService,
    private loginService: LoginServiceService

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

  disableLoaders(){
    this.showLoader = false
    this.disableButton = false
  }

  showLoaders(){
    this.showLoader = true
    this.disableButton = true
  }



  submitForm(form: any) {

    if (this.form.invalid) {
      PasswordValidator.validateAllFormFields(this.form);
      return;
    }
    this.showLoaders()
    // encrypt user details
    const userData = this.encryption.userEncryptedData(form.value.emailAdd, form.value.passWord)
    const adminData = this.encryption.adminEncryptedData()
    this.authentication(userData, adminData);
  }


  authentication(userData, adminData){
    this.authService.Authenticate(adminData).subscribe((response)=>{
      console.log(response)
      if(response.message === "Success"){
        //store response in observable
        const token = response.data.bearerToken
        const exp = response.data.expiryPeriod
        this.authService.storeToken(response)
        this.login(userData, token)
      }
      else {
        console.log('unable to store token')
        this.disableLoaders();
      }
    })
  }

  login(userData, token){
    this.loginService.SubmitLoginForm(userData, token).subscribe((resp)=>{
      //pass user data to an observable
      console.log(resp)
      if(this.authService.storeUser(resp)){
        this.toastr.success("Login Successful");
        this.router.navigate(['onboarding/dashboard'])
        this.disableLoaders();
      }
      else{
          this.toastr.error("oops, Don't tell anyone, system failure");
          console.log("user token not gotten");
          this.disableLoaders()
      }
    },
    (error) => {
      console.log(error.error.message)
      this.toastr.error(error.error.message);
      this.disableLoaders()
    })
  }

}
