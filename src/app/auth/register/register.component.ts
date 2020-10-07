import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ConfirmPasswordService } from './confirm-password.service';

import { RegisterPayLoad } from '../register-payload';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  registerPayLoad : RegisterPayLoad;

  constructor(private formBuilder: FormBuilder, private customValidation: ConfirmPasswordService, private authService: AuthService, private router: Router) {

    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)]],
      confirmpassword: ['', [Validators.required]],
      description: ['', [Validators.required]],
      linkedin: '',
      number: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    },
    {
      validator: [this.customValidation.confirmedValidator('password', 'confirmpassword')]
    })

    this.registerPayLoad = {
      first_name: '',
      last_name: '',
      username: '',
      contact: '',
      linkedin_url: '',
      description: '',
      status: 'ACTIVE',
      email: '',
      password: ''
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.registerPayLoad.first_name = this.registerForm.get('firstname').value;
    this.registerPayLoad.last_name  = this.registerForm.get('lastname').value;
    this.registerPayLoad.username  = this.registerForm.get('username').value;    
    this.registerPayLoad.email  = this.registerForm.get('email') .value;
    this.registerPayLoad.password  = this.registerForm.get('password') .value;
    this.registerPayLoad.contact  = this.registerForm.get('number') .value;
    this.registerPayLoad.linkedin_url  = this.registerForm.get('linkedin') .value;
    this.registerPayLoad.description  = this.registerForm.get('description') .value;
    console.log(this.registerPayLoad);
    
    this.authService.register(this.registerPayLoad).subscribe(data =>{
      alert("SignUp Successfull");
      this.router.navigateByUrl("/login");
    }, error => {
      alert("SignUp Failed");
    });
  }
}