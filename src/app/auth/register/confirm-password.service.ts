import { AbstractControl, FormGroup } from "@angular/forms";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmPasswordService {
  constructor() { }

  confirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        let control = formGroup.controls[controlName]; //password 
        let matchingControl = formGroup.controls[matchingControlName]; //confirm password
        
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mismatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
}