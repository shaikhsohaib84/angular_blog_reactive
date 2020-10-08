import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostPayLoad } from './post-payload';
import { PostService } from '../post.service';

import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  addPostForm : FormGroup;

  postPayLoad : PostPayLoad;

  constructor(private formBuilder: FormBuilder, private localStorageService: LocalStorageService, private postService:PostService, private router: Router) { 
    this.addPostForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    })

    this.postPayLoad = {
      title: '',
      content: '',
      status: '',
      user_id: 0,
      first_name: '',
      email: ''
    }
  }

  ngOnInit(): void {
  }

  addPost(){
    this.postPayLoad.title = this.addPostForm.get('title').value;
    this.postPayLoad.content = this.addPostForm.get('content').value;
    this.postPayLoad.status = 'PUBLISHED';
    this.postPayLoad.user_id = this.localStorageService.retrieve('loginData').id;
    this.postPayLoad.first_name = this.localStorageService.retrieve('loginData').first_name;
    // console.log("Post added "+this.postPayLoad);
    //call api here
    this.postService.addPost(this.postPayLoad).subscribe(data => {
      // console.log(data);
      this.router.navigateByUrl("/");
    },error => {
      alert("blog post failed");
    });
  }
}
