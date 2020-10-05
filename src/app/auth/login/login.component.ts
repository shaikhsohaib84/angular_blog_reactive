import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPayLoad } from '../login-payload';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayLoad: LoginPayLoad;

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ['', [Validators.required]]
    })
    this.loginPayLoad = {
      email:'',
      password:''
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginPayLoad.email = this.loginForm.get('email').value;
    this.loginPayLoad.password = this.loginForm.get('password').value;
    console.log(this.loginPayLoad);

     this.authService.login(this.loginPayLoad).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("/");

    }, error => {
      alert('Unsuccessful');
    });
  }
}