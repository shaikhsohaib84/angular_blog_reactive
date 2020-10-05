import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ConfirmPasswordService } from './confirm-password.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  

  constructor(private formBuilder: FormBuilder, private customValidation: ConfirmPasswordService) {

    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)]],
      confirmpassword: ['', [Validators.required]],
      description: ['', [Validators.required]],
      linkedin: '',
      number: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    },
      {
        validator: [this.customValidation.confirmedValidator('password', 'confirmpassword')]
      });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    alert(this.registerForm.get('firstname'));
  }
}
