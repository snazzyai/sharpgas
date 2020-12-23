import { Injectable } from '@angular/core';
import * as JsEncryptModule from 'jsencrypt';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encrypt2(data: any): any {
    const encrypt = new JsEncryptModule.JSEncrypt();
    const key = environment.encryptionKey;
    encrypt.setPublicKey(key);
    const hash = encrypt.encrypt(data);
    return hash;
  }

  adminEncryptedData(){
    return {
      username: this.encrypt2("sharpgasadmin"),
      password: this.encrypt2("Abcd123*")
    }
  }

  userEncryptedData(email, password){
    return {
      email: this.encrypt2(email),
      password: this.encrypt2(password)
    }
  }

  signupEncrptedData(form){
    return {
      firstname: this.encrypt2(form.value.firstName),
      lastName: this.encrypt2(form.value.lastName),
      email: this.encrypt2(form.value.emailAdd),
      mobileNumber: this.encrypt2(form.value.mobileNumber),
      password: this.encrypt2(form.value.passWord),
    };
  }
}
