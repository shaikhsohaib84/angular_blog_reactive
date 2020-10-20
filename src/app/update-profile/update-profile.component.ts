import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterPayLoad } from '../auth/register-payload';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateGroup: FormGroup;
  updatePayLoad: RegisterPayLoad;

  id: number;
  constructor(private localStorage: LocalStorageService, private formBuilder:FormBuilder, private authService:AuthService) { 
    this.updatePayLoad = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      contact: null,
      linkedin_url: null,
      status: 'ACTIVE',
      username: '',
      description: null
    }
  }

  ngOnInit(): void {
    let localData = this.localStorage.retrieve('loginData');
    this.id = localData.id;

    this.updateGroup = this.formBuilder.group({
      lastname: [localData.last_name, [Validators.required]],
      firstname: [localData.first_name, [Validators.required]],
      username: [localData.username, [Validators.required]],
      email: [localData.email, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    });
  }

  onSubmit(){
    this.updatePayLoad.first_name = this.updateGroup.get('firstname').value;
    this.updatePayLoad.last_name = this.updateGroup.get('lastname').value;
    this.updatePayLoad.email = this.updateGroup.get('email').value;
    this.updatePayLoad.username = this.updateGroup.get('username').value;
    this.updatePayLoad.contact = null;
    this.updatePayLoad.linkedin_url = null;
    this.updatePayLoad.description = null;
   
    this.authService.updateUser(this.updatePayLoad, this.id).subscribe((res:any)=>{
      console.log("this",this.updatePayLoad)
      alert("user updated successfull")
    }, error=>{
      console.log("this",this.updatePayLoad)
      console.log("this",this.updateGroup)
      alert("user updated failed!!")
    })
  }
}
