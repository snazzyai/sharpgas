import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
// import { ErrorStateMatcher } from "@angular/material/core";
import { ViewChild, ElementRef } from "@angular/core";

export interface ValidationResult {
  [key: string]: boolean;
}

export class PasswordValidator {
  public static hasNumber(control: FormControl): ValidationResult {
    let hasNumber = /\d/.test(control.value);
    const valid = hasNumber;
    if (!valid) {
      // return what´s not valid
      return { hasNumber: true };
    }
    return null;
  }

  public static hasUpper(control: FormControl): ValidationResult {
    let hasUpper = /[A-Z]/.test(control.value);
    const valid = hasUpper;
    if (!hasUpper) {
      // return what´s not valid
      return { hasUpper: true };
    }
    return null;
  }

  public static hasLower(control: FormControl): ValidationResult {
    let hasLower = /[a-z]/.test(control.value);
    const valid = hasLower;
    if (!valid) {
      // return what´s not valid
      return { hasLower: true };
    }
    return null;
  }

  public static valueLength(control: FormControl): ValidationResult {
    let valueLength = /.{8,30}/.test(control.value);
    const valid = valueLength;
    if (!valid) {
      // return what´s not valid
      return { valueLength: true };
    }
    return null;
  }

  // here we have the 'passwords' group
  public static checkPasswords(group: FormGroup) {
    // const pass = group.get('passWord').value;
    // let confirmPass = group.get('re_password').value;

    const pass = group.controls.passWord.value;
    const confirmPass = group.controls.re_password.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  public static validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public static hideShowPassword(showValue: boolean, passwordType: string) {
    if (showValue === true) {
      showValue = false;
      console.log(showValue);
    }
    if (showValue === false) {
      showValue = true;
      console.log(showValue);
    }

    console.log("bool", showValue);
    if (passwordType === "password") {
      passwordType = "text";
    } else {
      passwordType = "password";
    }
  }
}

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(
//     control: FormControl | null,
//     form: FormGroupDirective | NgForm | null
//   ): boolean {
//     const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
//     const invalidParent = !!(
//       control &&
//       control.parent &&
//       control.parent.invalid &&
//       control.parent.dirty
//     );

//     return invalidCtrl || invalidParent;
//   }
// }
