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
}
